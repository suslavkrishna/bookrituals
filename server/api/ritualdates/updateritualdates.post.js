import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    //console.log(event)
    const body = await readBody(event)
    
    return await prisma.$executeRaw`UPDATE ritualdates SET  RitualDate = ${body.RitualDate} ,  price =  ${body.RitualPrice} 
    where RitualDateID =  ${body.RitualDateID} `;
    
 })
  
