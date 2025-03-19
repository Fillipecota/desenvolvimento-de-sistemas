'use client'
import { FormEvent, useState } from "react";
import Avatar from "../Avatar";
import "./styles.css";
import { format, formatDistance, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

type Autor = {
    name: string;
    role: string;
    avatarUrl: string;
}

type comment = {
    massage: string;
    publishedAt: Date;
    like: number;
    author: Autor;
}

type postProps = {
    post: {
        author: Autor;
        publishedAt: Date;
        content: string;
        // comments: comment[];
    }
}


export default function Post({ post }: postProps) {
    const [newComment, setNewComment] = useState<string>('')

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();
        alert(newComment)
    }

    const dateFormat = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix:true
    })

    return (
        <article className="post">
            <header>
                <div className=" author">
                    <Avatar src={post.author.avatarUrl} hasBorder />
                    <div className="author-info">
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time>
                    {dateFormat}
                </time>

            </header>
            <div className="content">
                <p> {post.content}</p>
            </div>

            <form className="form" onSubmit={handleCreateNewComment}>
                <strong>Deixe um comentario</strong>

                <textarea
                    placeholder="Deixe um comentário"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />

                <footer>
                    <button type="submit">
                        Publicar
                    </button>
                </footer>
            </form>

        </article>
    )
}