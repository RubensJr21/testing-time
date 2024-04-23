import { NextApiRequest, NextApiResponse } from "next";

export default function Event( req : NextApiRequest, res: NextApiResponse){

    const { method } = req

    if(method === "GET"){
        // Obter 
        const { query } = req
        return res.status(200).json({
            id: query.event_id,
            name: `{nome}`,
            start_time: `{start_time}`,
            end_time: `{end_time}`,
            messages: `{messages_validaties}`,
        })
    }

    return res.status(404).json({
        message: 'Rota não encontrada'
    })
}