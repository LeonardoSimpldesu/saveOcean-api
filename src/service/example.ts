import { FastifyRequest } from "fastify";

export function exampleService(request: FastifyRequest){
    // Exemplo do Zod
    
    // const authenticateBodySchema = z.object({
    //     email: z.string().email(),
    //     password: z.string().min(3),
    // })

    // const { email, password } = authenticateBodySchema.parse(request.body);


    return 'Example'
}