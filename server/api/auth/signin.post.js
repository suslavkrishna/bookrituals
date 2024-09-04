import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event); // Retrieve request body
    if (!body) {
      console.error("Request body is empty or undefined");
      return createError({
        statusCode: 400,
        statusMessage: "Request body is empty or undefined",
      });
    }

    const { username, password } = body;
    console.log(username , password)
    if (!username || !password) {
      console.error("Username or password missing");
      return createError({
        statusCode: 400,
        statusMessage: "Username and password are required",
      });
    }

    const prisma = new PrismaClient() // Initialize database connection
      
    const user = await prisma.$queryRaw`SELECT * FROM users WHERE username = ${username}`
    let dbpassword = null;
    console.log(user , user.length)
    if(user.length >0)
    {
      dbpassword = user[0].password
    }
    else
    {
      dbpassword = 'nopaasword'
    }
     console.log(password ,dbpassword)
    
    // For security reasons, do not specify if username or password is incorrect
    if (!user || !(await bcrypt.compare(password, dbpassword))) {
      console.error(`Invalid username or password for user: ${username}`);
      return createError({
        statusCode: 401,
        statusMessage: "Invalid username or password",
      });
    } else {
      const userData = { username: user[0].username ,
        userrole:3,
        userid: user[0].userid 
      };
      await setUserSession(event, {
        user: userData,
        loggedInAt: new Date(),
      });
    }

    return { success: true, user };
  } catch (error) {
    console.error("Error handling login request:", error);
    return createError({
      statusCode: 500,
      statusMessage: "Failed to process request",
    });
  }
});
