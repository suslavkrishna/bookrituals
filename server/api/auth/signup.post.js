import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";


export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event); // Retrieve request body

    if (!body) {
      return { error: "Request body is empty or undefined" };
    }

    const { username, password } = body;
    console.log(body.username)

    if (!username || !password) {
      return { error: "Username and password are required" };
    }

    const prisma = new PrismaClient() // Initialize database connection
    console.log('password  --',body.password)
   //return null;
    const hashedPassword = await bcrypt.hash(body.password, 10); // Hash password

    try {
      // Insert user data into database
      const querystatus = await prisma.$executeRaw`INSERT INTO users (username, password,roleid) 
                VALUES (${username}, ${hashedPassword},3);`;
      console.log('query status',querystatus)
      const userData = { 
        username: username,
        userrole: 3
       };

      await setUserSession(event, {
        user: userData,
        loggedInAt: new Date(),
      });
      console.log('sucess -- userdata--',userData)

      return { success: true, userData };

    } 
    catch (error) {
      console.error("Error creating user:", error);
      return createError({
        statusCode: 409,
        statusMessage: "Username already exists",
      });
    }
  } catch (error) {
    console.error("Error handling signup request:", error);
    return createError({
      statusCode: 400,
      statusMessage: "Failed to process request",
    });
  } 
});