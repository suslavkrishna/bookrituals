import { PrismaClient } from "@prisma/client";
import Razorpay from "razorpay";


const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    //console.log(event)
    const body = await readBody(event)
    //console.log(body.address)
    
    const cartrow = await prisma.$queryRaw`SELECT cartid FROM carts WHERE userid = ${body.userid} and cartstatus=0`
    console.log("this is cart:",cartrow[0].cartid)
    let orderid = null;
     if(cartrow.length >0)
     {    
        try{
            const razorpay = new Razorpay({
                key_id: "rzp_test_iprtqJyTTJ0ZSa",
                key_secret: "s7bE8TOsjzaKm5JXXmq4thIi"})
        
                const options = {
                    "amount":100,
                    "currency": "INR",
                    "receipt": "order_cart_" + cartrow[0].cartid }
                console.log(options)   
                const order = await razorpay.orders.create(options)
                //console.log(order)
               // console.log(order.id)
                orderid = order.id

        }  
        catch(e)
        {   
            console.log(e.message)
        }
        
        const updateorderid = await prisma.$executeRaw`UPDATE carts SET orderid = ${orderid} WHERE userid = ${body.userid} and cartstatus=0`; 
    }
    return orderid;
 })
  