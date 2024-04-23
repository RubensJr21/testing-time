import { NextApiRequest, NextApiResponse } from "next";

export default function Event( req : NextApiRequest, res: NextApiResponse){
    const { method } = req

    if(method === "POST"){
        // Obter informações para criar evento
        // Definir tipo do query para essa rota
        const { query } = req

        return res.status(200).json({
            ok: true
        })
    }

    return res.status(404).json({
        message: 'Rota não encontrada'
    })
}