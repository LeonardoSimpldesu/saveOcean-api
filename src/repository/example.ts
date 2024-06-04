import { prisma } from "../lib/prisma"

export async function exampleRepository() {
    const user = await prisma.usersExample.findMany({})

    return user
}