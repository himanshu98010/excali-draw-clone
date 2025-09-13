import express, { response } from "express";
import jwt from "jsonwebtoken";
const app = express();
import {
  CreateRoomSchema,
  CreateUserSchema,
  signInSchema,
} from "@repo/common/config";
import { middleware } from "./middleware";
import { JWT_SECRET } from "@repo/backend-common/config";

app.post("/signup", (req, res) => {
  const data = CreateUserSchema.safeParse(req.body);
  if (!data.success) {
    res.json({
      messege: "incorrect inputs",
    });
    return;
  }
  //db call
  res.json({
    userId: "123",
  });
});

app.post("/signin", (req, res) => {
  const data = signInSchema.safeParse(req.body);
  if (!data.success) {
    res.json({
      messege: "incorrect inputs",
    });
    return;
  }
  const token = jwt.sign({ data }, JWT_SECRET);

  res.json({
    messege: "signed in successful",
  });
});

app.post("/room", middleware, (req, res) => {
  const data = CreateRoomSchema.safeParse(req.body);
  if (!data.success) {
    res.json({
      message: "Incorrect inputs",
    });
    return;
  }
});
