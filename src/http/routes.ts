import { FastifyInstance } from "fastify"
import { example } from "./controller/example"
import { allContents } from "./controller/content"
import { allEspecies } from "./controller/aquario"
import { classification } from "./controller/ranking"

export async function appRoutes(app: FastifyInstance){
    app.get('/example', example)
    app.get("/Content/allContents", allContents)
    app.get("/Aquario/allEspecies", allEspecies)
    app.get("/Ranking/classification", classification)
}