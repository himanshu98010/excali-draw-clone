import express, { response } from "express";
import jwt from "jsonwebtoken";
const app = express();
import { JWT_SECRET } from "@repo/backend-common/config";

app.post("/signup", (req, res) => {
  const data = 12;
  //db call
});

app.post("/signin", (req, res) => {
  const data = 12;
  const token = jwt.sign({ data }, JWT_SECRET);

  res.json({
    messege: "signed in successful",
  });
});

app.post("/room", (req, res) => {});
