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
			console.log(`${socket.userID} joined room ${roomId}`);
		});

		// move
		socket.on('move', async ({ roomId, cellIndex, playerIDSocket }) => {
			const match = await getMatchById(roomId);
			if (!match) {
				return;
			}

			if (match.winner_id) {
				io.to(roomId).emit('endGame', match.winner_id);
				return;
			}

			const { moves, user_matches } = match;

			const player_creator = user_matches.find((user_match) => user_match.creator === true);
			const player_opponent = user_matches.find((user_match) => user_match.creator === false);

			if (!player_creator || !player_opponent) {
				return;
			}

			let gamePlayers: GamePlayers;

			if (moves) {
				gamePlayers = JSON.parse(moves);
			} else {
				gamePlayers = {
					[player_creator.user_id]: {
						playerID: player_creator.user_id,
						playerMove: [],
					},
					[player_opponent.user_id]: {
						playerID: player_opponent.user_id,
						playerMove: [],
					},
				};
			}

			gamePlayers[playerIDSocket].playerMove.push(cellIndex);
			const winner = checkWinner(gamePlayers, playerIDSocket);
			const move_string = JSON.stringify(gamePlayers);

			if (winner) {
				updateMatchById(roomId, move_string, playerIDSocket, playerIDSocket, new Date());
				io.to(roomId).emit('endGame', playerIDSocket);
			} else {
				updateMatchById(roomId, move_string, undefined, playerIDSocket);
				socket.to(roomId).emit('opponentMove', cellIndex);
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
 * @param {string} winner_id?
 * @param {string} last_player?
 * @param {DateTime} finished_at?
 * @returns {Promise<Match>}
 */
async function updateMatchById(
	id: string,
	moves?: string,
	winner_id?: string,
	last_player?: string,
	finished_at?: Date,
) {
	const match = await db.match.update({
		where: {
			id,
		},
		data: {
			moves: moves,
			winner_id: winner_id,
			last_player: last_player,
			finished_at: finished_at,
		},
	});
	return match;
}

/*
 * Check winner
 * @param {GamePlayers} gamePlayers
 * @param {string} playerID
 * @returns {boolean}
 */
function checkWinner(gamePlayers: GamePlayers, playerID: string) {
	const playerMoves = gamePlayers[playerID].playerMove;
	const winningCombinations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	return winningCombinations.some((combination) => {
		return combination.every((cell) => playerMoves.includes(cell));
	});
}
