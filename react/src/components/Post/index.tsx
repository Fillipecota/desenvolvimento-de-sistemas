'use client'
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import Avatar from "../Avatar";
import "./styles.css";
import { format, formatDistance, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import TextareaCustom from "../TextareaCustom";
import axios from "axios";
import ButtonCustom from "../ButtonCustom";

type Autor = {
    name: string;
    role: string;
    avatarUrl: string;
}

type Comment = {
    id: string;
    author: Autor;
    publishedAt: Date;
    content: string;
    comment: string;
}
type Post = {
    id: string
    author: Autor;
    publishedAt: Date;
    content: string;
    comments: Comment[];
}

type postProps = {
    setPost: Dispatch<SetStateAction<Post[]>>,
    post: Post
}


export default function Post({ post, setPost }: postProps) {
    const [newComment, setNewComment] = useState<string>('')

    async function loadPost() {
        const response = await axios.get(`http://localhost:3001/posts/${post.id}`);
        setPost((prev: Post[]) =>
            prev.map(atual => (
                atual.id == post.id ? response.data : atual)))
    }

    async function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();

        const comment = {
            comment: newComment,
            publishedAt: new Date().toISOString(),
            author: {
                name: "Fellipe Sant Anna Cota",
                role: "Metarlugico",
                avatarUrl: "https://avatars.githubusercontent.com/u/170477610?v=4"
            }
        }

        const comments = post.comments?.length ? [...post.comments, comment] : [comment]

        await axios.patch(`http://localhost:3001/posts/${post.id}`, {
            "comments": comments

        })
        loadPost();
        setNewComment('');
    }

    const dateFormat = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true
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

                <TextareaCustom message={newComment}
                    setMessage={setNewComment}
                    title="Deixe um comentario" />

                <footer>
                    < ButtonCustom />
                </footer>
            </form>

            {post.comments?.length && post.comments.map(comment => (
                <article className="post comment" key={comment.id}>
                    <header>
                        <div className="author">
                            <Avatar src={comment.author.avatarUrl} hasBorder />
                            <div className="author-info">
                                <strong>{comment.author.name}</strong>
                                <span>{comment.author.role}</span>
                            </div>
                        </div>

                        <time>
                            {dateFormat}
                        </time>

                    </header>
                    <div className="content">
                        <p> {comment.comment}</p>
                    </div>
                </article>
            ))}

        </article>
    )
}







{/* <h1 key={comment.comments}>{comment.comments}</h1> */ }