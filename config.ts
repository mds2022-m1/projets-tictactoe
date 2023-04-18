import { Server } from 'socket.io';
import { Server as HttpServer } from 'node:http';
import { v4 as uuidv4 } from 'uuid';

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

		socket.on('test', (data) => {
			console.log(data);
		});

	});
}
