import { z } from "zod/v3";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type LoginUserDto = z.infer<typeof loginSchema>;
