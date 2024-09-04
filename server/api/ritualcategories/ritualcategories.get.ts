import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler(async () => {
    
      //return await prisma.ritualcategories.findMany()
      return await prisma.$queryRaw`SELECT * FROM ritualcategories`
  })
  