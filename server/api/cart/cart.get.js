import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => 
{
    const { id } =  await getQuery(event)

    const cartrow = await prisma.$queryRaw`SELECT cartid FROM carts WHERE userid = ${id} and cartstatus=0`
    //console.log("cartrow--",cartrow)
    if(cartrow.length >0)
    {  
        console.log(cartrow[0].cartid)
        const cartid =cartrow[0].cartid
        return await prisma.$queryRaw`select cartitems from carts WHERE cartid = ${cartid}`
        
        //console.log(cartitemrows.length)
    }  
})


 
