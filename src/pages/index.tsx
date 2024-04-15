import Link from 'next/link'

export default function Home(){
    return (
        // Adicionar margin top e bottom de 10%
        <div className="bg-gray-800 min-h-screen">
            <div className="bg-zinc-800 body rounded-2xl shadow-xl">
                <span className='text-9xl'>
                    A
                </span>
                <Link href={"/event"}>
                    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded inline-flex items-center">
                        <span>Criar evento</span>
                    </button>
                </Link>
            </div>
        </div>
    )
}