import { Server } from 'socket.io';
import { Server as HttpServer } from 'node:http';

// function for init server socket
export default function configServerWebsocket(server: HttpServer) {
	// init socket server
	const io = new Server(server);

	// connection event
	io.on('connect', (socket) => {
		socket.emit('eventFromServer', 'Hello from the server');
		// print out the message from the client

		// socket.join('room1');

		socket.on('joinRoom', (room) => {
			console.log(room);
			socket.join(room);
			console.log(io.sockets.adapter.rooms);
		});

		// socket.emit('eventFromServer', socket.id+' has joined the room1');
		console.log(io.sockets.adapter.rooms);

		// socket.on('eventFromClient', (data) => {
		//     console.log("Message from client: ", data);
		//     // send a message back to the client
		//     socket.emit('eventFromServer', "message recu de la part du client"+data);
		//     // print id of the client
		//     console.log("id client: ", socket.id);

		// })
	});
}
