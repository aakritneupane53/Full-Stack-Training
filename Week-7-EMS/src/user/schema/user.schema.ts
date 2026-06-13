import { z } from "zod";

const RoleSchema = z.enum(["user", "admin"]);

export const userSchema = z.object({
  name: z.string(),
  email: z.email(),
  password: z.string().min(8),
  role: RoleSchema.optional().default("user"),
});

export type userSchemaDto = z.infer<typeof userSchema>;
