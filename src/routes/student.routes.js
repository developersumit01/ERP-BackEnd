import { Router } from "express";
import { registerStudent } from "../controllers/student.controllers.js";

const studentRoute = Router();

studentRoute.route("/register").post(registerStudent);

export default studentRoute;
