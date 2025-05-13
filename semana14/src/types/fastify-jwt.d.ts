import 'fastify'
import { FastifyReply, FastifyRequest } from 'fastify'

declare module 'fastify' {
    interface FastifyRequest {
        user: {
            id: string,
            name: string,
            email: string,
            brithDate: Date,
            createdAt: Date,
            updatedAt: Date,
        },
        jwtVerify(): Promise<void>
    }

    interface FastifyInstance {
        authenticate(request: FastifyRequest, reply: FastifyReply):Promise<void>,
        jwt: {
            sign: FastifyJWT['sign'],
            verify: FastifyJWT['verify'],
            decode: FastifyJWT['decode']
        }
    }
}