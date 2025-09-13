import { z } from "zod";

export const CreateUserSchema = z.object({
  username: z.string().max(20).min(3),
  password: z.string(),
  name: z.string(),
});

export const signInSchema = z.object({
  username: z.string().max(20).min(3),
  password: z.string(),
});
export const CreateRoomSchema = z.object({
  name: z.string(),
});
