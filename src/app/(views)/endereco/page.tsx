'use client'

import { FormEvent, useState } from "react";
// import { useRouter } from 'next/router'

interface Address{
  cep: string;
  city: string;
  state: string;
  street: string;
  neighborhood: string;
}

export default function StreetFetch() {
  // const router = useRouter()

  // controle de estados dos campos
  const [ address, setAddress ] = useState<Address>(
    {
      cep: "",
      city: "", 
      state: "", 
      street: "", 
      neighborhood: ""
    }
  )

  // recebendo o cep
  async function handleZipCodeBlur (e: React.FocusEvent<HTMLInputElement>) {
    const zipcode = e.target.value;

    const res = await fetch(`https://brasilapi.com.br/api/cep/v2/${zipcode}`)
    
    if(res.ok) {
      const data : Address = await res.json()
      setAddress({
        cep: data.cep,
        city: data.city,
        state: data.state,
        street: data.street,
        neighborhood: data.neighborhood,
      })
    }else{
      alert('Cep não encontrado')
    }
  }

  // cadastrando com Fetch-API
  const handleCadastrar = (event: FormEvent) =>{
    event.preventDefault()

    const url = "http://localhost:8080/endereco"
    fetch( 
      url, { 
        method: "POST",  
        body: JSON.stringify( address )
      })
    // router.push("")
    alert('Cadastrado com sucesso')
  }

  return (
    <main className=" min-h-screen p-10 text-white">

      <form className="flex bg-slate-700 p-10 rounded-lg flex-col gap-3 w-full md:w-[400px] mx-auto text-white font-semibold text-xl">
        <h1>Cadastro de endereço: Fetch</h1>
        <input type="text" className="p-2 rounded-md bg-slate-800 mb-5 text-center" 
          onBlur={handleZipCodeBlur} id="cep" 
          placeholder="Cep ?"  
        />
        <input type="text" className="p-2 rounded-md bg-slate-900 border" value={address.state} disabled/>
        <input type="text" className="p-2 rounded-md bg-slate-900 border hidden" value={address.cep} disabled/>
        <input type="text" className="p-2 rounded-md bg-slate-900 border" value={address.street} disabled/>
        <input type="text" className="p-2 rounded-md bg-slate-900 border" value={address.neighborhood} disabled/>
        <input type="text" className="p-2 rounded-md bg-slate-900 border" value={address.city} disabled/>
        <button className="p-2 border rounded-md mt-4 hover:bg-violet-700" onClick={handleCadastrar}>Cadastrar</button>
        
      </form>
    </main>
  );
}