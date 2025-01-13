'use client'

import axios from "axios";
import { useEffect, useState } from "react";

interface Endereco{
    id: string,
    cep: string
    city: string
    state: string
    street: string
    neighborhood: string
}

export default function Clientes(){
    const [data, setData] = useState<Endereco[]>([]);
    const url = "http://localhost:8080/endereco"
    
    // Listar
    useEffect(() => {
        axios.get(url)
        .then(res => setData(res.data))
    }, [data, setData]);
    
    return(
        <div>
            <header className="flex justify-between mb-5">
                <h1 className="mb-5">Endereços de clientes</h1>
                <button className="bg-blue-600 px-4 rounded-md">+</button>
            </header>

            <div className="flex flex-col gap-2">
                { data.map( item => (
                    <div key={item.id} className="bg-black text-white p-5 w-full rounded-md flex gap-5 justify-between items-center">
                        
                        <div className="p-2 px-3 bg-red-500 rounded-md"> {item.state} </div>

                        
                        <div className="flex flex-1 flex-col  gap-2 ">
                            <div className="bg-blue-600 text-center w-24 rounded-sm"> {item.cep} </div>
                            <div className="hidden md:flex "> {item.neighborhood} </div>
                        </div>
                        
                        <div className="flex flex-col items-end  gap-2 ">
                            <div className="hidden md:flex"> {item.street} </div>
                            <div className="bg-blue-600 text-center px-2 rounded-sm"> {item.city} </div>
                        </div>

                    </div>
                ))
                }
            </div>
        </div>
    )
}