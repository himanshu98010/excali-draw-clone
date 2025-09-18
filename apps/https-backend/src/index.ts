import express, { response } from "express";
import jwt from "jsonwebtoken";
import { prismaClient } from "@repo/db/client";
const app = express();
import {
  CreateRoomSchema,
  CreateUserSchema,
  signInSchema,
} from "@repo/common/config";
import { middleware } from "./middleware";
import { JWT_SECRET } from "@repo/backend-common/config";
app.use(express.json());
app.post("/signup", async (req, res) => {
  const parsedData = CreateUserSchema.safeParse(req.body);

  if (!parsedData.success) {
    res.json({
      messege: "incorrect inputs",
    });
    return;
  }
  //db call
  try {
    await prismaClient.user.create({
      data: {
        email: parsedData.data.email,
        password: parsedData.data.password,
        name: parsedData.data.name,
      },
    });
    res.json({
      message: "signed up successfully",
    });
  } catch (e) {
    res.status(408).json({
      message: "user already exists with this email",
    });
  }
});

app.post("/signin", (req, res) => {
  const data = signInSchema.safeParse(req.body);
  if (!data.success) {
    res.json({
      messege: "incorrect inputs",
    });
    return;
  }
  const user = prismaClient.user.findOne({
    data,
  });
  if (user) {
    const token = jwt.sign({ data }, JWT_SECRET);
  }
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
