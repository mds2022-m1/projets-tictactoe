import { Server } from 'socket.io';
import { Server as HttpServer } from 'node:http'
import { v4 as uuidv4 } from 'uuid';




// function for init server socket
export default function configServerWebsocket(server: HttpServer) {
    // init socket server
    const io = new Server(server);

    // connection event
    // io.on('connect', (socket) => {




    //     // console.log("new client connected");

    //     socket.on('test', (data) => {
    //         console.log(data);
    //     });


    //     socket.on('playerJoined', (matchData) => {

    //         socket.join(matchData.match_id);
    //         // log room members
    //         // console.log(io.sockets.adapter.rooms);

    //         // // io.emit('matchUpdate', {
    //         // //     match: match,
    //         // //     action: 'create',
    //         // //     idUser: socket.id
    //         // // });
    //         // // io emit number of users in room
    //         let users = io.sockets.adapter.rooms.get(matchData.match_id);

    //         // io.to(match.id).emit('matchUpdate', {
    //         //     match: match,
    //         //     action: 'create',
    //         //     idUser: socket.id,
    //         //     users: users?.size
    //         // });


    //         io.to(matchData.match_id).emit('playerJoined', {
    //             match_id: matchData.match_id,
    //             user_id: matchData.user_id,
    //             users: users?.size
    //         });

    //     });



    //     socket.on('playerMoved', (playerMoved) => {
    //         io.emit("playerMoved", playerMoved);
    //     });


    //     socket.on('disconnect', () => { 
    //         console.log('user disconnected');
    //     });

    // });

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
            return next(new Error("invalid username or userID"));
        }
        
        socket.sessionID = uuidv4();
        socket.userID = userID;
        socket.username = username;


        next();
    });

    io.on("connection", (socket) => {

        socket.emit("session", {
            sessionID: socket.sessionID,
            userID: socket.userID,
        });


        //     // console.log("new client connected");

    //     socket.on('test', (data) => {
    //         console.log(data);
    //     });


    //     socket.on('playerJoined', (matchData) => {

    //         socket.join(matchData.match_id);
    //         // log room members
    //         // console.log(io.sockets.adapter.rooms);

    //         // // io.emit('matchUpdate', {
    //         // //     match: match,
    //         // //     action: 'create',
    //         // //     idUser: socket.id
    //         // // });
    //         // // io emit number of users in room
    //         let users = io.sockets.adapter.rooms.get(matchData.match_id);

    //         // io.to(match.id).emit('matchUpdate', {
    //         //     match: match,
    //         //     action: 'create',
    //         //     idUser: socket.id,
    //         //     users: users?.size
    //         // });


    //         io.to(matchData.match_id).emit('playerJoined', {
    //             match_id: matchData.match_id,
    //             user_id: matchData.user_id,
    //             users: users?.size
    //         });

    //     });



    //     socket.on('playerMoved', (playerMoved) => {
    //         io.emit("playerMoved", playerMoved);
    //     });


    //     socket.on('disconnect', () => { 
    //         console.log('user disconnected');
    //     });

    });
}
