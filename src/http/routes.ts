import { FastifyInstance } from "fastify"
import { example } from "./controller/example"

export async function appRoutes(app: FastifyInstance){
    app.get('/example', example)
}