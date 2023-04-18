import { Server } from 'socket.io';
import { Server as HttpServer } from 'node:http';
import { v4 as uuidv4 } from 'uuid';


interface Move {
	playerID1: string;
	player1Move: number[];
	playerID2: string;
	player2Move: number[];
}


// function for init server socket
export default function configServerWebsocket(server: HttpServer) {
	// init socket server
	const io = new Server(server);

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

	io.on('connection', (socket) => {
		socket.emit('session', {
			sessionID: socket.sessionID,
			userID: socket.userID,
		});

		// join room by room id
		socket.on("join", (roomId: string) => {
            socket.join(roomId);
            console.log(`${socket.userID} joined room ${roomId}`);
        });

		// move
		socket.on("move", async ({ roomId, cellIndex, playerID }) => {

			const match = await getMatchById(roomId);
			if (!match) {
				return;
			}

			const { moves, user_matches } = match;

			// player_creator select by user_matches.creator = true
			const player_creator = user_matches.find((user_match) => user_match.creator === true);
			const player_opponent = user_matches.find((user_match) => user_match.creator === false);

			if (!player_creator || !player_opponent ) {
				return;
			}

			let move: Move;

			if(moves) {
				// json parse moves
				move = JSON.parse(moves);
				move.playerID1 === playerID ? move.player1Move.push(cellIndex) : move.player2Move.push(cellIndex);
				
			}else{
				move = {
					playerID1: player_creator.user_id,
					player1Move: [],
					playerID2: player_opponent.user_id,
					player2Move: []
				}

				// add cellIndex to playerID in move
				move.playerID1 === playerID ? move.player1Move.push(cellIndex) : move.player2Move.push(cellIndex);
			}

			// encode move to string
			const move_string = JSON.stringify(move);
			updateMovesMatchById(roomId, move_string, playerID);
			
			



			
			
			

            socket.to(roomId).emit("opponentMove", cellIndex);
        });
	});
}



import prisma from '@prisma/client';

const db = new prisma.PrismaClient();


// get match by id
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

// update moves Match by id
async function updateMovesMatchById(id: string, moves: string, playerID: string) {
	const match = await db.match.update({
		where: {
			id,
		},
		data: {
			moves: moves,
			last_player : playerID
		},
	});
	return match;
}