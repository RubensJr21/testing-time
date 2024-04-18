// Customizar scroll bar

import Link from "next/link";
import { useState } from "react";

const _seconds = 1000
const _minutes = 60 * _seconds
const _hours = 60 * _minutes

const seconds = (time: number) => time * _seconds
const minutes = (time: number) => time * _minutes
const hours = (time: number) => time * _hours

const getTime = (delay_time?: number, date?: Date) => {
    var d = (!date) ? new Date() : date
    if (typeof delay_time == "number" ) { d = new Date(d.getTime() + delay_time) }
    return d.toLocaleTimeString().slice(0,5)
}

export default function Event(){

    const [start_time, setStartTime] = useState(getTime(minutes(30)))
    const [end_time, setEndTime] = useState(getTime(hours(2) + minutes(30)))
    const [nome, setNome] = useState("")
    
    return (
        <div className="bg-gray-800 min-h-screen">
            <div className="bg-zinc-800 body rounded-2xl shadow-xl">
                <div className='w-[7vw] h-[7vw] bg-white absolute top-0 left-0 right-0 bottom-0 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg'>
                    <div className='flex justify-center items-center w-full h-full text-4xl'>
                        <span>T²</span>
                    </div>
                </div>
                {/* https://flowbite.com/docs/typography/headings/ */}
                <h1 className="text-[2.85rem] font-extrabold dark:text-white">Página de criação do evento</h1>
                
                <div className="grid grid-cols-11 gap-3 w-full items-center">
                    <label htmlFor="nomeEvento" className="col-start-1 col-end-5 text-sm text-end font-medium text-gray-900 dark:text-white">Nome do evento:</label>
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
                        <label htmlFor="start_time" className="block col-start-1 col-end-5 text-sm text-end font-medium text-gray-900 dark:text-white">Hora de início:</label>
                        <div className="relative col-start-5 col-end-11">
                            <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <input type="time" id="start_time" className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={start_time} onChange={(e) => setStartTime(e.target.value)} required />
                        </div>
                    </div>
                    <div className="grid grid-cols-11 gap-3 items-center mb-4">
                        <label htmlFor="end_time" className="block col-start-1 col-end-5 text-sm text-end font-medium text-gray-900 dark:text-white">Hora de término:</label>
                        <div className="relative col-start-5 col-end-11">
                            <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <input type="time" id="end_time" className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={end_time} onChange={(e) => setEndTime(e.target.value)} required />
                        </div>


                    </div>
        </div>
                <Link href={"/event/edit"}>
                    <button
                        type="button"
                        onClick={(e) => {
                            
                            function timeToMinutes(timeStr: String) {
                                const [hours, minutes] = timeStr.split(':').map(Number);
                                return hours * 60 + minutes;
                            }
                              
                            function timeDifference(startTimeStr: String, endTimeStr: String) {
                                const startTimeMinutes = timeToMinutes(startTimeStr);
                                const endTimeMinutes = timeToMinutes(endTimeStr);
                            
                                // Calcula a diferença em minutos
                                let differenceInMinutes = endTimeMinutes - startTimeMinutes;
                            
                                // Se a diferença for negativa, ajusta para representar uma diferença de um dia
                                if (differenceInMinutes < 0) {
                                    differenceInMinutes += 24 * 60; // 24 horas em minutos
                                }
                            
                                return differenceInMinutes;
                            }

                            function minutesToTime(minutes : number) {
                                const hours = Math.floor(minutes / 60);
                                const remainingMinutes = minutes % 60;
                                const formattedHours = String(hours).padStart(2, '0');
                                const formattedMinutes = String(remainingMinutes).padStart(2, '0');
                                return `${formattedHours}:${formattedMinutes}`;
                            }
                              

                            var d = minutesToTime(timeDifference(start_time, end_time))
                            const string = `Hora de início: ${start_time} | Hora de término: ${end_time}\nDuração: ${d}`
                            alert(string)
                        }}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full col-span-1"
                    >
                        Criar evento
                    </button>
                </Link>
            </div>
        </div>
    )
}