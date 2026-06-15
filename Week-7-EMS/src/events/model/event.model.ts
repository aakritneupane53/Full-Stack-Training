import mongoose from "mongoose";
import { required } from "zod/mini";

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
    banner: {
      type: String,
    },
  },
  { timestamps: true },
);

export const Events = mongoose.model("events", eventSchema);
