import { FastifyReply, FastifyRequest } from "fastify";

export async function allContents(request: FastifyRequest, reply: FastifyReply) {
    try {

        const fs = require("fs")
        const contents = fs.readFileSync("content.json")
        let response = JSON.parse(contents)

        return reply.status(200).send(response)

    } catch (error) {
        return reply.status(409).send(error)
    }
}