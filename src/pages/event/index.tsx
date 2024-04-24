// useCallback: https://www.youtube.com/watch?v=jMWNNSx-mcU
// React.memo: https://www.youtube.com/watch?v=sBA_SDhIPqQ



// Customizar scroll bar
import { useEffect, useState } from "react";

import Form, { FormFildState } from "@/components/Form";
import { getTime, hours, minutes, minutesToTime, timeDifference, } from '@/lib/time';

export default function Event(){

    const [start_time, setStartTime] = useState(getTime(minutes(30)))
    const [end_time, setEndTime] = useState(getTime(hours(2) + minutes(30)))
    const [duration, setDuration] = useState("")
    const [nome, setNome] = useState("")
    
    useEffect(() => {
        if(duration == "") {
            var element = document.getElementById("details")
            element?.classList.add("translate-x-full")
        } else {
            var element = document.getElementById("details")
            element?.classList.remove("translate-x-full")
        }
    }, [duration])

    const Icone = () => {
        return (
            <div className='w-[7vw] h-[7vw] bg-white absolute top-0 left-0 right-0 bottom-0 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg z-50'>
                <div className='flex justify-center items-center w-full h-full text-4xl'>
                    <span>T²</span>
                </div>
            </div>
        )
    }
    const PageTitle = () => {
        /* https://flowbite.com/docs/typography/headings/ */
        return (
            <h1 className="text-[2.85rem] font-extrabold text-white">Página de criação do evento</h1>
        )
    }

    // posso ter uma tela que mostra a senha para o criador do evento e o link para o evento dele

    return (
        <div className="bg-gray-800 min-h-screen">
            {/* como centralizar um elemento: https://www.youtube.com/watch?v=Cu-HP-gvggg&t=102s&ab_channel=MarioSouto-DevSoutinho  */}
            <div className="absolute top-0 bottom-0 left-0 right-0 m-auto w-[90%] h-[75%] rounded-2xl shadow-xl">
                <Icone />
                <div className="bg-zinc-800 w-full h-full p-[20px] rounded-2xl shadow-xl relative overflow-hidden">
                    <div className="w-full h-full flex flex-col gap-[5%] justify-between items-center p-[4.5%]">
                        <PageTitle />
                        <div className="grid grid-cols-11 gap-3 w-full items-center">
                            <label htmlFor="nomeEvento" className="col-start-1 col-end-5 text-sm text-end font-medium text-white">Nome do evento:</label>
                            <input
                                    type="text"
                                    name="nomeEvento"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    placeholder="Digite a mensagem a ser exibida"
                                    className="w-full border rounded py-1 px-3 mr-2 col-start-5 col-end-11 focus:outline-none focus:shadow-outline"
                                />
                        </div>
                        <div className="w-full overflow-auto">
                        <div className="grid grid-cols-11 gap-3 items-center mb-4">
                            <label htmlFor="start_time" className="block col-start-1 col-end-5 text-sm text-end font-medium text-white">Hora de início:</label>
                            <div className="relative col-start-5 col-end-11">
                                <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <input type="time" id="start_time" className="border leading-none text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" value={start_time} onChange={(e) => setStartTime(e.target.value)} required />
                            </div>
                        </div>
                        <div className="grid grid-cols-11 gap-3 items-center mb-4">
                            <label htmlFor="end_time" className="block col-start-1 col-end-5 text-sm text-end font-medium text-white">Hora de término:</label>
                            <div className="relative col-start-5 col-end-11">
                                <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <input type="time" id="end_time" className="border leading-none text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" value={end_time} onChange={(e) => setEndTime(e.target.value)} required />
                            </div>
                        </div>
                    </div>
                        <button
                            type="button"
                            onClick={(e) => {
                                setDuration(minutesToTime(timeDifference(start_time, end_time)))
                            }}
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                        >
                            Definir Mensagens
                        </button>
                    </div>

                    {/* Details */}

                    <div id="details" className='bg-zinc-800 w-full h-full flex flex-col gap-[5%] justify-between items-center p-[calc(4.5%+20px)] absolute top-0 left-0 translate-x-full transition-all duration-500 ease-in'>
                        <h1 className="text-[2.85rem] text-center font-extrabold text-white">{nome}</h1>
                        <div className='flex flex-col items-center justify-center flex-wrap text-white'>
                            <span>Hora de início: {start_time} | Hora de fim: {end_time}</span>
                            <span>duração: {duration}</span>
                        </div>
                        <Form
                            backFunction={(e) => {
                                setDuration("")
                            }}
                            nextFunction={(e, messages) => {
                                // verificações
                                /*
                                    1. Usuário não pode enviar mensagem vazia
                                        1.1 Perguntar se deseja ignorar vazios todos os vázios
                                    2. O intervalo válido das mensagens maior que 00:00 e menor que tempo de duração de prova
                                */
                                
                                const sendToBack = (messages_validaties: FormFildState[]) => {
                                    console.log("Criando evento...")
                                        // Criar objeto do evento
                                        const event = {
                                            name: nome,
                                            start_time,
                                            end_time,
                                            messages: messages_validaties
                                        }
                                        console.log("Enviar informações para o back-end")
                                        console.log(event)
                                }

                                const messages_validaties = messages.filter((value) => value.message.length > 0)
                                if(messages_validaties.length == 0){
                                    alert("Pelo menos uma das mensagens precisa estar preenchida!")
                                } else if(messages.length > messages_validaties.length){
                                    if(confirm("Algumas mensagens estão em brnaco.\nEssas mensagens serão ignoradas! Deseja Continuar?") == true){
                                        sendToBack(messages_validaties)
                                    } else {
                                        console.log("Voltar para edição")
                                    }
                                } else { // Se chegar aqui quer dizer que messages e messages_validaties são do mesmo tamanho
                                    sendToBack(messages_validaties)
                                }
                            }}
                            duration={duration}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}