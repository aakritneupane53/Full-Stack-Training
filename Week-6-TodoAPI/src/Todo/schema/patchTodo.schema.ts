import { z } from "zod/v3";

export const patchToDoSchema = z.object({
  title: z.string().min(5).optional(),
  completed: z.boolean().default(false).optional(),
  description: z.string().min(8).optional(),
});

export type PatchToDoDto = z.infer<typeof patchToDoSchema>;
