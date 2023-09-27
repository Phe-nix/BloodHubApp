import * as jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function (req, res, next) {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token) {
      //verify token
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

      const loging = await prisma.loging.create({
        data: {
          userId: decoded.studentId,
          url: req.originalUrl,
          method: req.method,
        },
      });
      console.log(loging);
    }
    next();
  } catch (error) {
    console.log(error);
  }
}
