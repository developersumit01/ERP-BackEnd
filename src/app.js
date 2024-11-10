import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import studentRoute from "./routes/student.routes.js";
import { CONST_URL } from "./constants.js";
// http://localhost:8080/api/erp/users/register
const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(cookieParser());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

app.use(`${CONST_URL}/student`, studentRoute);

export { app };
