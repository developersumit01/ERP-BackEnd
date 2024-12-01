import { Router } from "express";
import {
    registerStudent,
    getStudentInfo,
    updateStudentByStudent,
    loginStudent,
} from "../controllers/student.controllers.js";
import { upload } from "../middlewares/multer.middlewere.js";
import verifyJWT from "../middlewares/auth.middlewere.js";

const studentRoute = Router();

studentRoute
    .route("/register-student")
    .post(upload.single("photo"), registerStudent);
studentRoute.route("/login").post(loginStudent);
studentRoute.route("/get-student-info").get(getStudentInfo);
studentRoute.route("/update-student-info").post(updateStudentByStudent);

export default studentRoute;
