import { title } from "process";

export const swaggerConfig = {
    openapi: {
        info: {
            title: "API task Todo List",
            description: " essa api pe do projeto",
            version: "1.0.1"
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        }
    },
    exposeRoute: true
}