import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    //console.log(event)
    const body = await readBody(event)
    
    return await prisma.$executeRaw`INSERT INTO ritualdates (RitualID, RitualDate, price) 
    VALUES (${body.RitualID}, ${body.RitualDate}, ${body.RitualPrice});`;
    
 })
  