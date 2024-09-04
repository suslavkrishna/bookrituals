import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    //console.log(event)
    const body = await readBody(event)
    
    

    const updateorderid = await prisma.$executeRaw`UPDATE carts SET orderid = ${body.orderid},
    paymentid=${body.paymentid},
    signature=${body.signature}
    WHERE 
    userid = ${body.userid} and cartstatus=0`; 
  
 })
  