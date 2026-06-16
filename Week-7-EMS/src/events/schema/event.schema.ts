import { z } from "zod";

export const eventSchema = z.object({
  title: z.string(),
  description: z.string().min(10),
  date: z.date().default(new Date()),
  venue: z.string(),
  capacity: z.number(),
  bookedSeats: z.number(),
  status: z.enum(["draft", "published"] as const).optional(),
  banner: z.string().optional().default(""),
});

export type eventDto = z.infer<typeof eventSchema>;
