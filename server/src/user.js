import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const router = express.Router();

//get room history by user id
router.get("/history/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const reservation = await prisma.user.findMany({
      where: {
        id: parseInt(id),
      },
      select: {
        Reservation: {
          include: {
            Room: true,
            User: true,
          },
        },
      },
    });
    res.status(200).json(reservation);
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: error.message });
  }
});



//get room history by user id
router.get("/report/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const report = await prisma.user.findMany({
      where: {
        id: parseInt(id),
      },
      select: {
        Report: {
          include: {
            Room: true,
            User: true,
          },
        },
      },
    });
    res.status(200).json(report);
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: error.message });
  }
});

export default router;
