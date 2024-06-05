import { FastifyInstance } from "fastify"
import { example } from "./controller/example"
import { allContents } from "./controller/content"

export async function appRoutes(app: FastifyInstance){
    app.get('/example', example)
    app.get("/Content/allContents", allContents)
}