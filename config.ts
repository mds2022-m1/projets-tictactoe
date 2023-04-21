import { Server } from 'socket.io';
import { Server as HttpServer } from 'node:http';
import { v4 as uuidv4 } from 'uuid';

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
			const opponent = user_matches.find((user_match) => user_match.user_id !== creator_id);
			const player = user_matches.find((user_match) => user_match.user_id === playerID);

			if (!creator_id || !opponent || !player) return;

			const gamePlayers = moves
				? JSON.parse(moves)
				: {
						[creator_id]: { playerID: creator_id, playerMove: [] },
						[opponent.user_id]: { playerID: opponent.user_id, playerMove: [] },
				  };

			gamePlayers[playerID].playerMove.push(cellIndex);

			const result = checkResult(gamePlayers, playerID, opponent.user_id);
			const moveString = JSON.stringify(gamePlayers);

			if (result === Result.PROGRESS) {
				updateMatchById(roomId, moveString, playerID);
				socket.to(roomId).emit('opponentMove', cellIndex);
			} else {
				let playerResult = result;
				let opponentResult =
					result === Result.WIN
						? Result.LOSE
						: result === Result.LOSE
						? Result.WIN
						: result;
				// score
				const playerScore = playerResult === Result.WIN ? 1 : playerResult === Result.LOSE ? 0 : 0.5;
				const opponentScore = opponentResult === Result.WIN ? 1 : opponentResult === Result.LOSE ? 0 : 0.5;


				const resultMatch = {
					player: { id: player.id, user_id: player.user_id, result: playerResult },
					opponent: { id: opponent.id, user_id: opponent.user_id, result: opponentResult },
				};

				updateMatchAndUserMatchById(
					roomId,
					moveString,
					new Date(),
					player.id,
					opponent.id,
					resultMatch.player.result,
					resultMatch.opponent.result,
					playerScore,
					opponentScore,
				);
				socket.to(roomId).emit('lastMove', cellIndex);
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
async function updateMatchById(
	id: string,
	moves?: string,
	last_player?: string,
	finished_at?: Date,
) {
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
 * Update Match and UserMatch by id
 * @param {string} id
 * @param {string} moves
 * @param {DateTime} finished_at
 * @param {string} idUserMatch1
 * @param {string} idUserMatch2
 * @param {string} result1
 * @param {string} result2
 * @param {number} score1
 * @param {number} score2
 * @returns {Promise<Match>}
 * @returns {Promise<UserMatch>}
 */
async function updateMatchAndUserMatchById(
	id: string,
	moves: string,
	finished_at: Date,
	idUserMatch1: string,
	idUserMatch2: string,
	result1: string,
	result2: string,
	score1: number,
	score2: number,
) {
	const updatedUserMatches = await db.match.update({
		where: {
			id: id,
		},
		data: {
			moves: moves,
			finished_at: finished_at,
			user_matches: {
				update: [
					{
						where: {
							id: idUserMatch1,
						},
						data: {
							result: result1,
							score: score1,
						},
					},
					{
						where: {
							id: idUserMatch2,
						},
						data: {
							result: result2,
							score: score2,
						},
					},
				],
			},
		},
	});
	return updatedUserMatches;
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
