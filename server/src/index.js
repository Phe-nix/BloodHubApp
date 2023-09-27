import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import auth from "./auth.js";
import room from "./room.js";
import report from "./report.js";
import user from "./user.js";
import reservation from "./reservation.js";
import loging from "../middleware/loging.js";

const router = express.Router();
const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(loging);

app.use(
  "/api",
  router.use("/auth", auth),
  router.use("/room", room),
  router.use("/report", report),
  router.use("/reservation", reservation),
  router.use('/user', user)
);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
