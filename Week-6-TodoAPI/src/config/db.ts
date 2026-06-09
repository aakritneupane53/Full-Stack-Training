import mongoose from "mongoose";
import "dotenv/config";

export default async function connectDB(): Promise<void> {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(`Connected db at ${mongoose.connection.name} `);
  } catch (error) {
    console.log("Error connecting the db", error);
  }
}
