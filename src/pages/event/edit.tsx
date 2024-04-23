import Form from '@/components/Form'

// Customizar scroll bar

// RECEBER: HORA DE INÍCIO, HORA DE FIM, DURAÇÃO DO EVENTO
// ENCAMINHAR PARA A PÁGINA DE GESTÃO

export default function Event(){
    return (
        <div className="bg-gray-800 min-h-screen">
            <div className="bg-zinc-800 body rounded-2xl shadow-xl">
            <div className='w-full'>
                <h1 className="text-[2.85rem] text-center font-extrabold text-white">{"{Nome do evento}"}</h1>
                <div className='flex flex-col items-center justify-center flex-wrap text-white'>
                    <span>Hora de início: {"{hora_início}"} | Hora de fim: {"{hora_fim}"}</span>
                    <span>duração: {"{duração}"}</span>
                </div>
            </div>
            <div className='w-[7vw] h-[7vw] bg-white absolute top-0 left-0 right-0 bottom-0 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg'>
                <div className='flex justify-center items-center w-full h-full text-4xl'>
                    <span>T²</span>
                </div>
            </div>
            <Form />
            </div>
        </div>
    )
}