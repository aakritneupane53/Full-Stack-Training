import mongoose from "mongoose";
import { string } from "zod";
import { required } from "zod/mini";

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    completed: {
      type: Boolean,
      default: false,
    },

    description: {
      type: string,
      min: 8,
      required: true,
    },
  },
  { timestamps: true },
);

export const ToDo = mongoose.model("todo", todoSchema);

export interface ToDoT {
  id: string;
  completed: boolean;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}
