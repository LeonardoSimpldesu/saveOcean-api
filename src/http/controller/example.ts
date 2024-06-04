import { FastifyReply, FastifyRequest } from "fastify";
import { exampleService } from "../../service/example";

export async function example(request: FastifyRequest, reply: FastifyReply) {
    try {
      const example = exampleService(request)
      return reply.status(200).send(example);
    } catch (error) {
      console.log(error)
      return reply.status(409).send(error)
    }
  }