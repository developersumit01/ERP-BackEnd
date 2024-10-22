import dotenv from "dotenv";
import connectDB from "./database/ConnectDB.js";
dotenv.config({ path: "./.env" });

connectDB()

console.log(process.env.NAME);
