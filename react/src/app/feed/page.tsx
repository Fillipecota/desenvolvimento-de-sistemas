'use client'

import foto from '@/assets/istockphoto-1268187885-2048x2048.jpg'
import Header from "@/components/Header"
import "./styles.css"
import Image from "next/image"
import Avatar from '@/components/Avatar'
import { BsPencilSquare } from "react-icons/bs";
import { FormEvent, useEffect, useState } from 'react'
import axios from 'axios'
import Post from '@/components/Post'

export default function Feed() {
    const [posts, setPosts] = useState<any[]>([]);
    const [content, setContent] = useState<string>('');

    useEffect(() => {
        loadPost();
    }, [])


    async function loadPost() {
        const response = await axios.get('http://localhost:3001/posts');

        const postSort = response.data.sort((a: any, b: any) => (new Date(a.publishedAt) as any) - (new Date(b.publishedAt) as any))
        setPosts(response.data)
    }

    async function handleCreatePost(event: FormEvent) {
        const post = {
            id: posts.length + 1,
            content: content,
            publishedAt: new Date().toDateString(),
            author: {
                name: "Fellipe Sant Anna Cota",
                role: "Metarlugico",
                avatarUrl: "https://avatars.githubusercontent.com/u/170477610?v=4"
            }
        }
        await axios.post('http://localhost:3001/posts', post);
        await loadPost();
        setContent('');
    }

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
                    <form onSubmit={handleCreatePost}>

                        <textarea placeholder='="o que esta pensando ?'
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />

                        <button type='submit'>
                            pubiicar
                        </button>

                    </form>
                    {posts.map(item => (
                        <Post post={item} key={item.id} />
                    ))}
                </main>
            </div>
        </div>
    )
}