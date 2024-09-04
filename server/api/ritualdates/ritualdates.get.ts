import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const { id } =  await getQuery(event)
        
    return await prisma.$queryRaw`SELECT ritualdates.ritualid,ritualdates.ritualdateid,ritualdates.ritualdate,ritualdates.price FROM ritualdates INNER JOIN Rituals  
    ON rituals.ritualid=ritualdates.ritualid WHERE ritualdates.ritualID = ${id}`
    
  })
  
