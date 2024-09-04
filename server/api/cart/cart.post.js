import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    //console.log(event)
    const body = await readBody(event)
    //console.log("this is body--",body.cartitems)
    //console.log("this is userid--", body.userid)
    
   // console.log(result)
    const cartdetails = await prisma.$queryRaw`SELECT cartid FROM carts WHERE userid = ${body.userid} and cartstatus=0`
    console.log("lenght--",cartdetails.length)
    if(cartdetails.length ==0)
    {     
      const transactionrow = await prisma.$executeRaw`INSERT INTO carts (userid,cartstatus,cartdate) VALUES (${body.userid},0, NOW());`;
    }
    else
    {
      //console.log("this is cartid--",cartdetails[0].cartid)
     
      const cartrow = await prisma.$queryRaw`SELECT cartid FROM carts WHERE userid = ${body.userid} and cartstatus=0`
      console.log("cartrow--",cartrow)

      console.log(JSON.stringify(body.cartitems))

      return await prisma.$executeRaw`UPDATE carts
    SET cartitems =  ${JSON.stringify(body.cartitems)}
    WHERE cartid = ${cartrow[0].cartid}`;

     /* for (let i = 0; i < body.cartitems.length; i++) 
      {
        //console.log(body.cartitems[i])
        const item = body.cartitems[i];
        const cartitemdetails =await prisma.$queryRaw`SELECT cartitemid FROM cartitems WHERE cartid = ${cartrow[0].cartid} 
        and itemid=${item.RitualDateID}`
        //console.log("cartitem lenght--",cartitemdetails.length)
        if(cartitemdetails.length ==0)
        {     
           const transactionrow =await prisma.$executeRaw`INSERT INTO cartitems (cartid,itemid,itemamount,itemdate) 
           VALUES (${cartrow[0].cartid},${item.RitualDateID}, ${item.price},${item.RitualDate});`;
        }
        else
        {
          const transactionrow =await prisma.$executeRaw`INSERT INTO cartitems ;`;
        }
      } */

     /* body.cartitems.forEach(async item => {
        //console.log(item)
        //console.log(cartrow)
        const cartitemdetails =await prisma.$queryRaw`SELECT cartitemid FROM cartitems WHERE cartid = ${cartrow[0].cartid} 
        and itemid=${item.RitualDateID}`
        console.log("cartitem lenght--",cartitemdetails.length)
        if(cartitemdetails.length ==0)
        {     
            const transactionrow =await prisma.$executeRaw`INSERT INTO cartitems (cartid,itemid,itemamount,itemdate) 
            VALUES (${cartrow[0].cartid},${item.RitualDateID}, ${item.price},${item.RitualDate});`;
        }
      })*/

    }
    

    
   // console.log(transactionrow)
    
 })
  