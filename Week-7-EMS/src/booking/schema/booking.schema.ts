import { z } from "zod";
import mongoose from "mongoose";

export const bookingSchema = z.object({
  userId: z.string().refine((val) => mongoose.Types.ObjectId.isValid(val), {
    message: "Invalid Mongodb ObjectID for userId",
  }),
  eventId: z.string().refine((val) => mongoose.Types.ObjectId.isValid(val), {
    message: "Invalid Mongodb ObjectID for eventId",
  }),
  quantity: z.number().default(1),
});

export type bookingSchemaDto = z.infer<typeof bookingSchema>;
