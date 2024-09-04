import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    //console.log(event)
    const body = await readBody(event)
    
    return await prisma.$executeRaw`INSERT INTO rituals (RitualTitle,  price, RitualCategoryID) 
    VALUES (${body.name}, ${body.price}, ${body.categoryid});`;
 })
  