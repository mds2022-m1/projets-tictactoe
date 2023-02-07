import { Server } from 'socket.io';
import { Server as HttpServer } from 'node:http'



// function for init server socket
export default function configServerWebsocket(server: HttpServer) {
    // init socket server
    const io = new Server(server);

    // connection event
    io.on('connect', (socket) => {

        
        

        console.log("new client connected");
        socket.on('joinMatch', (match) => {
            socket.join(match.id);
            // log room members
            console.log(io.sockets.adapter.rooms);
            
            io.emit('matchUpdate', {
                match: match,
                action: 'create',
                idUser: socket.id
            });
        });
    });
}
