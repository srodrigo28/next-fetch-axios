import Link from "next/link";
import { PostProps } from "../page";

export default async function DetailProduto({ params }: {
    params: Promise<{ id: string }> }) {
    const { id } = await params;
    
    const response = await fetch(`https://dummyjson.com/posts/${id}`)
    const data: PostProps = await response.json()

    return(
        <div>
            <h1>Detalhes da API: {id}</h1>
            <Link className="bg-red-500 p-2" href="/product">Voltar</Link>
            <hr />

            <div className="flex flex-col w-96 mt-5">
                <h2 className="mb-5 font-semibold text-zinc-600 
                text-2xl">{data.title}</h2>
                <p>{data.body}</p>
            </div>
        </div>
    )
}