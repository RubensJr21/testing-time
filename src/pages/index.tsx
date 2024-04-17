import Link from 'next/link'

export default function Home(){
    return (
        <div className="bg-gray-800 min-h-screen">
            <div className="bg-zinc-800 body rounded-2xl shadow-xl">
                <div className="w-[25vw] h-[25vw] bg-white text-9xl flex justify-center items-center rounded-2xl shadow-2xl">
                    <span>T²</span>
                </div>
                <Link href={"/event/create"}>
                    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded inline-flex items-center">
                        <span>Criar evento</span>
                    </button>
                </Link>
            </div>
        </div>
    )
}