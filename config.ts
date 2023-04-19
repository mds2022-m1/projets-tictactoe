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
		socket.on("move", async ({ roomId, cellIndex, playerIDSocket }) => {
			const match = await getMatchById(roomId);
			if (!match) {
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
		
			const move_string = JSON.stringify(gamePlayers);
			updateMovesMatchById(roomId, move_string, playerIDSocket);
		
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