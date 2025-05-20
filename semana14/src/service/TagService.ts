import { Tag, Task as TaskPrisma } from "@prisma/client";
import { prisma } from "../prisma/client";

class TagService {
    public async create(name: string): Promise<void> {
        const tag: Tag = {
            id: crypto.randomUUID(),
            name: name,
            createdAt: new Date(),
            updatedAt: new Date(),
        }

        await prisma.tag.create({ data: tag });
    }
    public async relation(taskId: string, tagId: string): Promise<void> {
        // verifica se taskId EXISTE pelo id
        const task = await prisma.task.findUnique({ where: { id: taskId } })
        if (!task) {
            throw new Error("tarefa informada não existe...")
        }
        // verifica se tagId EXISTE pelo id
        const tag = await prisma.tag.findUnique({ where: { id: tagId } })
        if (!tag) {
            throw new Error("tag informada não existe...")
        }
        await prisma.tasktag.create({
            data: {
                taskId: taskId,
                tagId: tagId
            }
        });

    }

}


export const tagService = new TagService();


