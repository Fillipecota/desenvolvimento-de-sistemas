export const generalTaskSchema = {
    tags: ['task'],
    security: [{ bearerAuth: [] }]
}

export const createTaskSchema = {
    tags: ['task'],
    security: [{ bearerAuth: [] }],
    body: {
        type: 'object',
        required: ['text'],
        properties: {
            text: { type: 'string' }
        }
    }
}