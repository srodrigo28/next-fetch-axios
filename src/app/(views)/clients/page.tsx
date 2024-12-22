'use client'

import Link from "next/link"
import { useEffect, useId, useState } from "react"

interface PostProps2{
    id: number;
    title: string;
    body: string;
    useId: number;
}

interface ResponseProps2{
    posts: PostProps2[]
}

export interface propsPost{ } // não esquecer de fazer

export default function Clients(){
    const [posts, setPosts] = useState([])

    useEffect( () => {
        fetch(`https://dummyjson.com/posts`)
        .then(res => res.json())
        .then(data => setPosts(data.posts))
    }, [])

return(
    <div>
        <h1 className="text-center mb-3">Total: {posts.length}</h1>
        <div className="flex flex-col gap-4 mx-5">
            {posts.map((post: any) => (
                <div key={post.id} className="bg-gray-400 p-4 rounded-md">
                    <h2 className="text-black font-semibold uppercase"> {post.title} </h2>
                    <p className="p-2 flex gap-2 justify-between items-center"> 
                        {post.body} 
                        <Link href={`/clients/${post.id}`} className="px-5 pb-2 hover:bg-yellow-600 self-end bg-green-600 rounded-md">...</Link> 
                    </p>
                </div>
            ))}
        </div>
    </div>
)}