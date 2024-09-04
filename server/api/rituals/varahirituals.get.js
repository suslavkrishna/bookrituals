import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
   // const { id } =  await getQuery(event)
   
       return await prisma.$queryRaw`SELECT rituals.ritualtitle,ritualcategories.ritualcategory, 
       rituals.RitualID, rituals.RitualCategoryID,
       rituals.price
       FROM rituals inner join ritualcategories on rituals.ritualcategoryid = ritualcategories.ritualcategoryid
       WHERE rituals.ritualcategoryid in (select RitualCategoryID from ritualcategories where parentid = 7)`
  })
  