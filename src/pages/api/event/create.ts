import { NextApiRequest, NextApiResponse } from "next";
import { Server } from "socket.io";

import type { Server as HTTPServer } from 'http';
import type { Socket as NetSocket } from 'net';
import type { Server as IOServer } from 'socket.io';

interface SocketServer extends HTTPServer {
  io?: IOServer | undefined
}

interface SocketWithIO extends NetSocket {
  server: SocketServer
}

interface NextApiResponseWithSocket extends NextApiResponse {
  socket: SocketWithIO
}

export default function Event( req : NextApiRequest, res: NextApiResponseWithSocket){
    const { method } = req

    if(method !== "POST"){
        return res.status(404).json({
            message: 'Rota não encontrada'
        })
    }
    
    // Obter informações para criar evento
    // Definir tipo do query para essa rota
    const { query } = req

    const { name } =  req.body

    const io = new Server(res.socket.server)

    return res.status(200).json({
        name
    })
}