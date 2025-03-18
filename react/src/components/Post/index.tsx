import Avatar from "../Avatar";
import "./styles.css";

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
    return (
        <article className="post">
            <header>
                <div className=" author">
                    <Avatar src='https://avatars.githubusercontent.com/u/170477618?v=4' hasBorder />
                    <div className="author-info">
                        <strong>Valerio do job</strong>
                        <span>job</span>
                    </div>
                </div>

                <time>
                    públicado há 2 horas
                </time>

            </header>
            <div className="content">
                <p> Satisfação ou seu dinheiro de volta R$:150 Hora</p>
            </div>

            <form className="form">
                <strong>Deixe um comentario</strong>

                <textarea placeholder="Deixe um comentário" />

                <footer>
                    <button>
                        Publicar
                    </button>
                </footer>
            </form>

        </article>
    )
}