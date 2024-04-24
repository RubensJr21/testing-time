import { NextApiRequest, NextApiResponse } from "next";

import type { Server as HTTPServer } from 'http';
import type { Socket as NetSocket } from 'net';
import { Server, Socket, type Server as IOServer } from 'socket.io';

// https://stackoverflow.com/questions/74023393/working-with-typescript-next-js-and-socket-io#:~:text=19-,I%20found%20an%20answer,-.%20I%20don%27t%20know

interface SocketServer extends HTTPServer {
    io?: IOServer | undefined
}

interface SocketWithIO extends NetSocket {
    server: SocketServer
}

interface NextApiResponseWithSocket extends NextApiResponse {
    socket: SocketWithIO
}

export default function Event(req: NextApiRequest, res: NextApiResponseWithSocket) {

    const { method } = req
    req.query

    // if(method !== "GET"){
    //     return res.status(404).json({
    //         message: 'Rota não encontrada'
    //     })
    // }
    // Obter 
    const { query } = req

    const { event_id } = query

    // recuper o socket daquele evento
    // encaminhar o socket

    const io = new Server(res.socket.server)
    res.socket.server.io = io
        
    io.on("connection", (socket: Socket) => {
        console.log('Novo cliente conectado', socket.id);
        socket.on('subscribeToEventUpdates', (eventId) => {
            socket.join(`event-${eventId}`);
            console.log(`Cliente ${socket.id} inscrito para atualizações do evento ${eventId}`);
        });
        // Exemplo de publicação de uma mensagem para um canal específico
        socket.on('sendMessageToEvent', ({ event_id, message }) => {
            io.to(`event-${event_id}`).emit('eventMessage', message);
            console.log("Mensagem recebida")
        });

        // Evento de desconexão (quando um cliente se desconecta)
        socket.on('disconnect', () => {
            console.log('Cliente desconectado');
        });
    })

    res.end()

    // return res.status(200).json({
    //     id: event_id,
    //     name: `{nome}`,
    //     start_time: `{start_time}`,
    //     end_time: `{end_time}`,
    //     messages: `{messages_validaties}`,
    // })
}