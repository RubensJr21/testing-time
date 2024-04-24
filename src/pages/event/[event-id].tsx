export default function EventID(){
    return (
        <div className="bg-gray-800 min-h-screen">
            {/* como centralizar um elemento: https://www.youtube.com/watch?v=Cu-HP-gvggg&t=102s&ab_channel=MarioSouto-DevSoutinho  */}
            <div className="absolute top-0 bottom-0 left-0 right-0 m-auto w-[90%] h-[75%] rounded-2xl shadow-xl">
                <div className='w-[7vw] h-[7vw] bg-white absolute top-0 left-0 right-0 bottom-0 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg z-50'>
                    <div className='flex justify-center items-center w-full h-full text-4xl'>
                        <span>T²</span>
                    </div>
                </div>
                <div className="bg-zinc-800 w-full h-full p-[20px] rounded-2xl shadow-xl relative overflow-hidden">
                    <div className="w-full h-full flex flex-col gap-[5%] justify-between items-center p-[4.5%]">
                        <h1 className="text-[2.85rem] font-extrabold text-white">{"{Nome do evento}"}</h1>
                        <div className="w-full h-full grid grid-cols-3 gap-[2%]">
                            <div className="bg-gray-600 col-span-1 w-full h-full p-[20px] rounded-2xl shadow-xl flex justify-center items-center">
                                <h1 className="text-[2.85rem] font-extrabold text-white">{"{Relógio aqui}"}</h1>
                            </div>
                            <div className="bg-white col-span-2 w-full h-full p-[20px] rounded-2xl shadow-xl overflow-hiden text-3xl flex flex-col justify-between">
                                {/* Para adicionar uma nova mensagem remover a última */}
                                <h1>{"{MENSAGEM}"}</h1>
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={(e) => {
                                prompt("Digite a senha para encerrar o evento:")
                            }}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                        >
                            Encerrar evento
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
    // Caso o id fornecido seja inválido será redirecionado para a tela de criação
}