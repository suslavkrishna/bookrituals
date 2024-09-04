import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const { id } =  await getQuery(event)
           
       return await prisma.$queryRaw`select rituals.RitualID, ritualdates.RitualDateID, rituals.RitualTitle, 
       ritualdates.price  from rituals inner join ritualdates
        on rituals.ritualid = ritualdates.ritualid where rituals.RitualCategoryID = 3`
  })
  