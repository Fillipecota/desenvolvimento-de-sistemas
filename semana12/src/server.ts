import fastify from "fastify";
import { taskController } from "./controller/teskController";

const app = fastify()

// registo que mostra onde estão as rotas de app
app.register(taskController)

// funçao de ouvir chamadas
app.listen({ port: 3333 }).then(() => { console.log('Backend rodando na porta 3333!') })

// // // criação de edpoint(caminho para pag)
// app.get("/hello", () => {
//     // função que define o que ira fazer dentro da edpoint
//     console.log('entrou no edpoint HEllo???');
//     return "Olá Mundo "
// })
// app.post("/hello", () => {
//     // função que define o que ira fazer dentro da edpoint
//     console.log('Metodo post');
//     return "Hello Word Post "
// })
// app.get("/helo", (request, response) => {
//     console.log(request.method);
//     console.log(request.url);
//     return response.code(500).send('error')
// })

