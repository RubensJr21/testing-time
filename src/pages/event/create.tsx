// Customizar scroll bar

import Link from "next/link";
import { useState } from "react";

import Form from "@/components/Form";
import { getTime, hours, minutes, minutesToTime, timeDifference, } from '@/lib/time';

export default function Event(){

    const [start_time, setStartTime] = useState(getTime(minutes(30)))
    const [end_time, setEndTime] = useState(getTime(hours(2) + minutes(30)))
    const [nome, setNome] = useState("")
    
    const Icone = () => {
        return (
            <div className='w-[7vw] h-[7vw] bg-white absolute top-0 left-0 right-0 bottom-0 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg'>
                <div className='flex justify-center items-center w-full h-full text-4xl'>
                    <span>T²</span>
                </div>
            </div>
        )
    }
    const PageTitle = () => {
        /* https://flowbite.com/docs/typography/headings/ */
        return (
            <h1 className="text-[2.85rem] font-extrabold dark:text-white">Página de criação do evento</h1>
        )
    }

    const InputName = () => {
        return (
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
        )
    }

    const InputTimes = () => {
        return (
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
        )
    }

    const DefineEvent = () => {
        return (
            <>
                <div className="w-full h-full flex flex-col gap-[5%] justify-between items-center p-[4.5%]">
                    <PageTitle />
                    <InputName />
                    <InputTimes />
                    <Link href={"/event/edit"}>
                        <button
                            type="button"
                            onClick={(e) => {
                                var d = minutesToTime(timeDifference(start_time, end_time))
                                const string = `Hora de início: ${start_time} | Hora de término: ${end_time}\nDuração: ${d}`
                                alert(string)
                            }}
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full col-span-1"
                        >
                            Definir Mensagens
                        </button>
                    </Link>
                </div>
            </>
        )
    }

    const DetailEvent = () => {
        return (
            <>
            <div className='w-full h-full flex flex-col gap-[5%] justify-between items-center p-[4.5%]'>
                <h1 className="text-[2.85rem] text-center font-extrabold dark:text-white">{"{Nome do evento}"}</h1>
                <div className='flex flex-col items-center justify-center flex-wrap dark:text-white'>
                    <span>Hora de início: {"{hora_início}"} | Hora de fim: {"{hora_fim}"}</span>
                    <span>duração: {"{duração}"}</span>
                </div>
                <Form />
            </div>
            </>
        )
    }

    return (
        <div className="bg-gray-800 min-h-screen">
            <div className="bg-zinc-800 body rounded-2xl shadow-xl">
                <Icone />
                <DefineEvent />
                {/* <DetailEvent /> */}
            </div>
        </div>
    )
}