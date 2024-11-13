import { Router } from "express";
import { registerStudent } from "../controllers/student.controllers.js";
import { upload } from "../middlewares/multer.middlewere.js";

const studentRoute = Router();

studentRoute
    .route("/register")
    .post(upload.single("studentImage"), registerStudent);

export default studentRoute;
