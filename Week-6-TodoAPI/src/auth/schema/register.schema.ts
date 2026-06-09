import { z } from "zod/v3";

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type RegisterUserDto = z.infer<typeof registerSchema>;
