import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const { id } =  await getQuery(event)
        
    return await prisma.$queryRaw`select RitualTitle, RitualDate from ritualdates inner join rituals on ritualdates.RitualID = rituals.RitualID
where ritualdates.ritualid in (SELECT ritualid from rituals where ritualcategoryid = 1 )`
    
  })
  





