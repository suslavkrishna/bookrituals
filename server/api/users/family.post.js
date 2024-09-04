import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    //console.log(event)
    const body = await readBody(event)
    //console.log(body.address)
   
    return await prisma.$executeRaw`UPDATE users
    SET family =  ${body.family}
    WHERE userid = ${body.userid};`;
    
 })
  