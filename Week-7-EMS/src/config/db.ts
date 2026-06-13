import "dotenv/config";
import mongoose from "mongoose";

export default async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGO_CONECTION_STRING as string);
    console.log(`DB connected succesfully : ${mongoose.connection.name}`);
  } catch (error) {
    console.log("Error while connecting to the DB");
    console.log(error.message);
    throw error;
  }
}
