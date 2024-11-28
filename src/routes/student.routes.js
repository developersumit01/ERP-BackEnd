import { Router } from "express";
import {
    registerStudent,
    getStudentInfo,
} from "../controllers/student.controllers.js";
import { upload } from "../middlewares/multer.middlewere.js";

const studentRoute = Router();

studentRoute.route("/register").post(upload.single("photo"), registerStudent);
studentRoute.route("/get").get(getStudentInfo);

export default studentRoute;
