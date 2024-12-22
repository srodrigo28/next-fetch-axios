'use client'

import "./NavBar.css"
import Link from "next/link";

export function NavBar(){

    return(
        <ul className="mb-10 flex gap-5">
          <li className={``} >
            <Link href="/home">Home</Link>
          </li>
          <li className={``}>
            <Link href="/product">Produtos</Link>
          </li>
          <li className={``}>
            <Link href="/service">Serviços</Link>
          </li>
          <li className={``}>
            <Link href="/clients">Clientes</Link>
          </li>
        </ul>
    )
}