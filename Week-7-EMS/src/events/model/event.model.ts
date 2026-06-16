import mongoose, { InferSchemaType } from "mongoose";
import { optional } from "zod";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    venue: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    bookedSeats: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
    banner: {
      type: String,
      default: "",
    },
  },
  { timestamps: true },
);

export type Event = InferSchemaType<typeof eventSchema>;

export const Event = mongoose.model<Event>("events", eventSchema);
