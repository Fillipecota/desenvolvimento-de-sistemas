import { error } from "console";
import { Task } from "../entity/task";

class TaskService {
    // FAKE BANCO DE DADOS
    private tasklist: Task[] = [];
    create(text: string) {
     
        // VERIFICAR SE JA EXISTE UMA TAREFA COM O TEXT INFORMADO
        const textAlreadyExist = this.tasklist.find(task => task.getText() === text);
        // SE EXISTIR- REPOSTA COM ERRO
        if (textAlreadyExist) {
            throw new Error("Ja existe uma tarefa com esse texto")
        }
        // CRIAR UM OBJETODO TIPO TASK
        const newTask = new Task(text)
        // ADICIONAR NA LISTA OU NO BANCO DE DADOS
        this.tasklist.push(newTask)
    }
    getAll() {
        return this.tasklist
    }
}
//  serve pra expota a class por inteiro 
export const taskService = new TaskService();