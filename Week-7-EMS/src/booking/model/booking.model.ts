import mongoose, { InferSchemaType } from "mongoose";
import { number } from "zod";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    eventId: {
      type: mongoose.Types.ObjectId,
      ref: "Event",
      required: true,
    },
    seats: {
      type: number,
      default: 1,
    },
  },
  { timestamps: true },
);

type Booking = InferSchemaType<typeof bookingSchema>;

export const Booking = mongoose.model<Booking>("Booking", bookingSchema);
