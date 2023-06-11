import { Server } from 'socket.io';
import { Server as HttpServer } from 'node:http';
import { v4 as uuidv4 } from 'uuid';
import EloRank from 'elo-rank';



interface GamePlayers {
	[playerID: string]: {
		playerID: string;
		playerMove: number[];
	};
}

// function for init server socket
export default function configServerWebsocket(server: HttpServer) {
	// init socket server
	const io = new Server(server);

	// middleware for socket
	io.use(async (socket, next) => {
		const sessionID = socket.handshake.auth.sessionID;

		if (sessionID) {
			socket.sessionID = sessionID;
			socket.userID = socket.handshake.auth.userID;
			socket.username = socket.handshake.auth.username;
			return next();
		}
		const username = socket.handshake.auth.username;
		const userID = socket.handshake.auth.userID;
		if (!username || !userID) {
			return next(new Error('invalid username or userID'));
		}

		socket.sessionID = uuidv4();
		socket.userID = userID;
		socket.username = username;

		next();
	});

	// socket connection
	io.on('connection', (socket) => {
		// send session id to client
		socket.emit('session', {
			sessionID: socket.sessionID,
			userID: socket.userID,
		});

		// join room socket
		socket.on('join', (roomId: string) => {
			socket.join(roomId);
			socket.roomID = roomId;
			io.to(roomId).emit('joinOrLeaveGame', io.sockets.adapter.rooms.get(roomId)?.size);
		});

		// move
		socket.on('move', async ({ roomId, cellIndex, playerID }) => {
			const match = await getMatchById(roomId);

			if (!match) {
				return;
			}

			const { moves, user_matches, creator_id } = match;
			const player = user_matches.find((user_match) => user_match.user_id === playerID);
			const opponent = user_matches.find((user_match) => user_match.user_id !== playerID);

			if (!creator_id || !player || !opponent) return;

			const movesJson = moves
				? JSON.parse(moves)
				: {
					[player.user_id]: { "playerID": player.id, playerMove: [] },
					[opponent.user_id]: { "playerID": opponent.id, playerMove: [] },
				};

			movesJson[playerID].playerMove.push(cellIndex);

			// check result 
			const playerResult = checkResult(movesJson, playerID, playerID === player.user_id ? opponent.user_id : player.user_id);
			const moveString = JSON.stringify(movesJson);


			if (playerResult === Result.PROGRESS) {
				updateMatchById(roomId, moveString, playerID);
				socket.to(roomId).emit('opponentMove', cellIndex);
			} else {
				const opponentResult = playerResult === Result.WIN ? Result.LOSE : playerResult === Result.LOSE ? Result.WIN : playerResult;

				// score
				const playerScore = playerResult === Result.WIN ? 1 : playerResult === Result.LOSE ? 0 : 0.5;
				const opponentScore = opponentResult === Result.WIN ? 1 : opponentResult === Result.LOSE ? 0 : 0.5;

				// get elo of player and opponent
				const playerElo = await getEloByGameIdAndUserId(match.game_id, player.user_id)
				const opponentElo = await getEloByGameIdAndUserId(match.game_id, opponent.user_id)

				if (!playerElo) return
				if (!opponentElo) return

				// calculate elo of player and opponent

				let elo = new EloRank();

				let expectedScorePlayer = elo.getExpected(playerElo?.ranking_elo, opponentElo?.ranking_elo);
				let expectedScoreOpponent = elo.getExpected(opponentElo?.ranking_elo, playerElo?.ranking_elo);

				const playerEloFinal = elo.updateRating(expectedScorePlayer, playerScore, playerElo?.ranking_elo);
				const opponentEloFinal = elo.updateRating(expectedScoreOpponent, opponentScore, opponentElo?.ranking_elo);

				// update elo of player and opponent
				await updateEloById(playerElo?.id, playerEloFinal)
				await updateEloById(opponentElo?.id, opponentEloFinal)

				// update match and userMatch
				const resultMatch = {
					player: { id: player.id, user_id: player.user_id, result: playerResult },
					opponent: { id: opponent.id, user_id: opponent.user_id, result: opponentResult },
				};
				await updateMatchById(roomId, moveString, playerID, new Date())
				await updateUserMatchById(player.id, resultMatch.player.result, playerScore)
				await updateUserMatchById(opponent.id, resultMatch.opponent.result, opponentScore)

				socket.to(roomId).emit('lastMove', cellIndex);
				// send result to client
				io.to(roomId).emit('endGame', resultMatch);







			}
		});

		// if leave room or disconnect
		socket.on('disconnect', () => {
			if (socket.roomID) {
				io.to(socket.roomID).emit(
					'joinOrLeaveGame',
					io.sockets.adapter.rooms.get(socket.roomID)?.size,
				);
			}
		});
	});
}

import prisma from '@prisma/client';

const db = new prisma.PrismaClient();

/*
 * Get Match by id and include user_matches
 * @param {string} id
 * @returns {Promise<Match>}
 */
async function getMatchById(id: string) {
	const match = await db.match.findUnique({
		where: {
			id,
		},
		include: {
			user_matches: true,
		},
	});
	return match;
}

/*
 * Update Match by id
 * @param {string} id
 * @param {string} moves?
 * @param {string} last_player?
 * @param {DateTime} finished_at?
 * @returns {Promise<Match>}
 */
async function updateMatchById(id: string, moves?: string, last_player?: string, finished_at?: Date) {
	const match = await db.match.update({
		where: {
			id,
		},
		data: {
			moves: moves,
			last_player: last_player,
			finished_at: finished_at,
		},
	});
	return match;
}

/*
 * Update UserMatch by id
 * @param {string} id
 * @param {string} result
 * @param {number} score
 * @returns {Promise<UserMatch>}
 */
async function updateUserMatchById(id: string, result: string, score: number) {
	const userMatch = await db.userMatch.update({
		where: {
			id,
		},
		data: {
			result: result,
			score: score,
		},
	});
	return userMatch;
}


/*
* Get Elo with game_id and user_id
* @param {string} game_id
* @param {string} user_id
* @returns {Promise<Elo>}
*/
async function getEloByGameIdAndUserId(game_id: string, user_id: string) {
	const elo = await db.elo.findFirst({
		where: {
			game_id: game_id,
			user_id: user_id
		},
	})
	return elo;
}
/*
* Update Elo player by id
* @param {string} id
* @param {number} ranking_elo
*/
async function updateEloById(id: string, ranking_elo: number) {
	const elo = await db.elo.update({
		where: {
			id
		},
		data: {
			ranking_elo
		}
	})
	return elo;
}

/*
 * Check result of game (win, lose, equality (all cells are filled))
 * @param {GamePlayers} gamePlayers
 * @param {string} playerID
 * @param {string} opponentID
 * @returns {boolean}
 */
function checkResult(gamePlayers: GamePlayers, playerID: string, opponentID: string) {
	const playerMove = gamePlayers[playerID].playerMove;
	const opponentMove = gamePlayers[opponentID].playerMove;

	if (checkWin(playerMove)) {
		return Result.WIN;
	} else if (checkWin(opponentMove)) {
		return Result.LOSE;
	} else if (playerMove.length + opponentMove.length === 9) {
		return Result.EQUALITY;
	} else {
		return Result.PROGRESS;
	}
}

/*
 * Check win
 * @param {number[]} playerMove
 * @returns {boolean}
 */
function checkWin(playerMove: number[]) {
	const win = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	return win.some((win) => {
		return win.every((cell) => playerMove.includes(cell));
	});
}

enum Result {
	PROGRESS = 'PROGRESS',
	WIN = 'WIN',
	LOSE = 'LOSE',
	EQUALITY = 'EQUALITY',
}
