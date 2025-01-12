'use client'

import axios from "axios";
import { FormEvent, useState } from "react";

interface Address{
  cep: string;
  city: string;
  state: string;
  street: string;
  neighborhood: string;
}

export default function StreeAxios2() {

  // controle de estados dos campos
  const [ cep, setCep ] = useState("")
  const [ city, setCity ] = useState("")
  const [ state, setState ] = useState("")
  const [ street, setStreet ] = useState("")
  const [ neighborhood, setNeighborhood ] = useState("")

  // recebendo o cep
  async function handleZipCodeBlur ( e: React.FocusEvent<HTMLInputElement> ) {
    const zipcode = e.target.value;

    const res = await axios(`https://brasilapi.com.br/api/cep/v2/${zipcode}`)

    setCep(res.data.cep), 
    setCity(res.data.city), 
    setState(res.data.state)
    setStreet(res.data.street), 
    setNeighborhood(res.data.neighborhood)

    console.log(cep)
  }

  // cadastrando com Axios-API
  const handleCadastrar = (event: FormEvent) =>{
    event.preventDefault()

    const url = "http://localhost:8080/endereco"
    axios.post(url, { 
      cep, city, state, street, neighborhood 
    })
    alert('Cadastrado com sucesso')
  }

  return (
    <main className=" min-h-screen p-10 text-white">

      <form className="flex bg-slate-700 p-10 rounded-lg flex-col gap-3 w-full md:w-[400px] mx-auto text-white font-semibold text-xl">
        <h1>Cadastro de endereço : Axios 2</h1>
        
        <input id="cep" placeholder="Cep ?" onBlur ={ handleZipCodeBlur }  
            type="text" className="p-2 rounded-md bg-slate-800 mb-5 text-center" 
        />

        <input type="text" className="p-2 rounded-md bg-slate-900 border hidden" value={cep} disabled/>
        <input type="text" className="p-2 rounded-md bg-slate-900 border" value={state} disabled/>
        <input type="text" className="p-2 rounded-md bg-slate-900 border" value={street} disabled/>
        <input type="text" className="p-2 rounded-md bg-slate-900 border" value={neighborhood} disabled/>
        <input type="text" className="p-2 rounded-md bg-slate-900 border" value={city} disabled/>
        <button className="p-2 border rounded-md mt-4 hover:bg-violet-700" onClick={handleCadastrar}>Cadastrar</button>
        
      </form>

    </main>
  );
}