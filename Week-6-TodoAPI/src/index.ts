import express from "express";

import connectDB from "./config/db";
import authRoutes from "./auth/auth.routes";
import todoRoutes from "./Todo/routes/todo.routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(authRoutes);
app.use(todoRoutes);

app.get("/", (_req, res) => res.json({ message: "Hello from todo api" }));
app.get("/health", (_req, res) => res.json({ message: "Okay" }));

export default app;
