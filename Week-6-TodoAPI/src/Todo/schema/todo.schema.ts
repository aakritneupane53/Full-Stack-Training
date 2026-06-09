import { z } from "zod/v3";

export const createToDoSchema = z.object({
  title: z.string().min(5),
  completed: z.boolean().default(false),
  description: z.string().min(8),
});

export type CreateToDoDto = z.infer<typeof createToDoSchema>;
