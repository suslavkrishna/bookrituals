import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const { id } =  await getQuery(event)
        
    return await prisma.$queryRaw`SELECT JSON_VALUE(address, '$.address') AS address, 
    JSON_VALUE(address, '$.city') AS city,
    JSON_VALUE(address, '$.state') AS state,
    JSON_VALUE(address, '$.country') AS country,
    JSON_VALUE(address, '$.pin') AS pin,
    JSON_VALUE(address, '$.selectednational') AS selectednational    
    FROM carts WHERE cartid= ${id}`
  })
  





