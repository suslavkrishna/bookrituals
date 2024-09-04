import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    //console.log(event)
    const body = await readBody(event)
    //console.log(body.address)
   
    return await prisma.$executeRaw`UPDATE carts
    SET address =  ${body.address}
    WHERE cartid = ${body.cartid};`;
    
 })
  