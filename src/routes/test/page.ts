import { io } from 'socket.io-client';

export let messageDiv = 'message vide';

const socket = io();

socket.on('eventFromServer', (message) => {
	console.log(message);
	messageDiv = message;
});
export function test() {
	// print server message

	//  console.log(socket)

	socket.emit('joinRoom', `maRoom ${Math.random() > 0.5 ? '1' : '2'}`);
	socket.emit('eventFromClient', 'test');

	console.log(messageDiv);
	// client side code
}
