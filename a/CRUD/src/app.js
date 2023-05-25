import express, { urlencoded } from "express";
import * as userController from "./controller/user.controller.js";
const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.post("/", userController.addUser);
app.get("/", (req, res) => {
  return res.status(200).json({ message: "User Data" });
});

export default app;
