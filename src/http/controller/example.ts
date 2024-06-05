import { FastifyReply, FastifyRequest } from "fastify";
import { exampleService } from "../../service/example";

export async function example(request: FastifyRequest, reply: FastifyReply) {
    try {
      const example = exampleService(request)
      const fs = require("fs")
      const pontuacaoData = fs.readFileSync("pontuacao.json").toString()
      console.log(pontuacaoData); 

      
      return reply.status(200).send(JSON.parse(pontuacaoData));
    } catch (error) {
      console.log(error)
      return reply.status(409).send(error)
    }
  }