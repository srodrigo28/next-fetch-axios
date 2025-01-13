'use client'

import "./NavBar.css"
import Link from "next/link";

export function NavBar(){

    return(
        <ul className="mb-10 flex gap-5 select-none">
          <li className={``} >
            <Link href="/home">Home</Link>
          </li>
          <li className={``}>
            <Link href="/product">Produtos</Link>
          </li>
          <li className={``}>
            <Link href="/endereco">End Fetch</Link>
          </li>
          <li className={``}>
            <Link href="/endereco2">Axios 1</Link>
          </li>
          <li className={``}>
            <Link href="/endereco3">Axios 2</Link>
          </li>
          <li className={``}>
            <Link href="/clientes">Clientes</Link>
          </li>
        </ul>
    )
}