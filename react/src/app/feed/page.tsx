'use client'

import foto from '@/assets/istockphoto-1268187885-2048x2048.jpg'
import Header from "@/components/Header"
import "./styles.css"
import Image from "next/image"
import Avatar from '@/components/Avatar'

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
                    </div>
                </aside>

                <main className="main">

                </main>
            </div>
        </div>
    )
}