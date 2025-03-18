'use client'

import foto from '@/assets/istockphoto-1268187885-2048x2048.jpg'
import Header from "@/components/Header"
import "./styles.css"
import Image from "next/image"
import Avatar from '@/components/Avatar'
import { BsPencilSquare } from "react-icons/bs";
import Post from '@/components/Post'

export default function Feed() {


    return (
        <div>
            <Header />
            <div className="container">
                <aside className="sidebar">
                    <Image src={foto} alt="cover" className="cover" />
                    <div className='profile'>
                        <Avatar src='https://avatars.githubusercontent.com/u/170477610?v=4' hasBorder />
                        <strong>Fellipe Sant Anna Cota</strong>
                        <span>Metarlugico</span>
                        <footer>
                            <button className='button-edit-profile'>
                                <BsPencilSquare />
                                Editar seu perfil
                            </button>
                        </footer>
                    </div>
                </aside>

                <main className="main">
                    <Post post={{} as any} />
                    <Post post={{} as any} />
                    <Post post={{} as any} />
                </main>
            </div>
        </div>
    )
}