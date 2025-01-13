import Link from "next/link";

interface Endereco{
    id: string,
    cep: string
    city: string
    state: string
    street: string
    neighborhood: string
}

export default async function DetailEndereco({ params }: {
    params: Promise<{ id: string }> }) {
    const { id } = await params;
    
    const response = await fetch(`http://localhost:8080/endereco/${id}`)
    const data = await response.json()

    return(
        <div>
            <div className="flex justify-between">
            <h1>Detalhes da API: {id}</h1>
            <Link className="bg-red-500 p-2" href="/clients">Voltar</Link>
            </div>
            <hr />

            <div className="flex flex-col w-96 mt-5">
                <h2 className="mb-5 font-semibold text-zinc-600 
                text-2xl">{data.title}</h2>
                <div>
                    { data.map( (item : Endereco )  => (
                        <ul key={item.id}>
                            <li> {item.cep} </li>
                            <li> {item.city} </li>
                            <li> {item.id} </li>
                            <li> {item.street} </li>
                            <li> {item.state} </li>
                        </ul>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}