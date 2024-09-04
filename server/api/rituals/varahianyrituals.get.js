import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
   // const { id } =  await getQuery(event)
   
       return await prisma.$queryRaw`SELECT * FROM rituals WHERE ritualcategoryid = 17`
  })
  