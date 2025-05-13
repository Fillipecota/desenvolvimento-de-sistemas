import { User } from "@prisma/client";
import { prisma } from "../prisma/client";
import { compare, hash } from "bcryptjs";
import { FastifyInstance } from "fastify";


class UserService {
    public async register({ name, email, password, birthDate }: createUserTypes): Promise<void> {

        const userExist = await prisma.user.findUnique({
            where: { email: email }
        })
        if (userExist) {
            throw new Error("E-mail ja cadastrado!")
        }

        const passwordHashed = await hash(password, 10)

        const user: User = {
            id: crypto.randomUUID(),
            name: name,
            email: email,
            password: passwordHashed,
            birthDate: new Date(birthDate),
            createdAt: new Date(),
            updatedAt: new Date()


        }

        await prisma.user.create({ data: user });
    }
    public async login({ email, password }: loginType, app: FastifyInstance): Promise<string | null> {
        const user = await prisma.user.findUnique({ where: { email: email } })
        if (!user) {
            throw new Error("credencias Invalidas.")
        }

        const passwordIsvalid = await compare(password, user.password)
        if (!passwordIsvalid) {
            throw new Error("Credencias Invalidas")
        }
        return app.jwt.sign({
            id: user.id,
            nome: user.name,
            email: user.email,
            birthDate: user.birthDate,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        })

    }
}

export const userService = new UserService();

