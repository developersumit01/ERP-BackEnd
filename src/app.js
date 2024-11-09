import express from "express";
import cors from "cors";
// import cookieParser from "cookie-parser";
import asyncHandler from "./utils/asyncHandler.js";
import { UserData } from "./models/student.models/temp.js";
// http://localhost:8080/api/erp/users/register
const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
// app.use(express.cookieParser());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

const setData = asyncHandler(async () => {
  const data = await UserData.create({
    name: {
      data: "Sumit",
    },
  });

  console.log(data);
});

setData();

export { app };
