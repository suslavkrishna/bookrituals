import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const { id } =  await getQuery(event)
        
    return await prisma.$queryRaw`SELECT * FROM ritualdates INNER JOIN Rituals  
    ON rituals.ritualid=ritualdates.ritualid WHERE ritualdates.ritualID = ${id}`
    
  })
  
