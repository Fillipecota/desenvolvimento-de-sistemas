import fastify from "fastify";

const app = fastify()

// criação de edpoint(caminho para pag)
app.get("/hello",()=>{
// função que define o que ira fazer dentro da edpoint 
    console.log('entrou no edpoint HEllo???');
    return "Olá Mundo "
})
app.post("/hello",()=>{
    // função que define o que ira fazer dentro da edpoint 
        console.log('Metodo post');
        return "Hello Word Post "
    })
app.listen({ port: 3333 }).then(() => { console.log('Backend rodando na porta 3333!') })