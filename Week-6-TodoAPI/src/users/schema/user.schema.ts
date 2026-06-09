import { z } from "zod/v3";

export const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type CreateUserDto = z.infer<typeof userSchema>;
