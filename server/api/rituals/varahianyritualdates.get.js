import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
   // const { id } =  await getQuery(event)
   
       return await prisma.$queryRaw`select rituals.ritualid,ritualdates.ritualdateid,rituals.ritualtitle, ritualdates.ritualdate from ritualdates inner join rituals on RitualDates.ritualid = rituals.ritualid

where ritualdates.ritualid in (SELECT ritualid FROM rituals WHERE ritualcategoryid = 17)`
  })
  