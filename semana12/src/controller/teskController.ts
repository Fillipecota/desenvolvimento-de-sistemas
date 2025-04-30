import { FastifyInstance } from "fastify";
import { taskService } from "../services/taskService";

// crontrolle recebe informação e passa informação

export async function taskController(app: FastifyInstance) {
    // pode ser usado reponse ou reply
    app.post("/task", (request, response) => {
        // PEGAR INFROMAÇÃO DE FRON OU DE QUEM CHAMA O ENDPOINT(TEXT)
        const body = request.body as { text: string }
        try {
            // pega informação do service
            taskService.create(body.text);
            // retorna a resposta
            return response.code(201).send();
            // retorna o vetor
            // return response.code(200).send(newTask);
        } catch (error: any) {
            return response.code(409).send({ error: error.message })
        }
    })
    app.get("/tasks", (_, response) => {
        const list = taskService.getAll();
        return response.code(200).send(list)
    })

}