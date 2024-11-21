import { Router } from "express";
import { registerStudent } from "../controllers/student.controllers.js";
import { upload } from "../middlewares/multer.middlewere.js";
import {
    addNewBranch,
    addNewCourse,
} from "../controllers/course.controller.js";

const studentRoute = Router();

studentRoute.route("/register").post(upload.single("photo"), registerStudent);
studentRoute.route("/add-course").post(addNewCourse);
studentRoute.route("/add-branch").post(addNewBranch);

export default studentRoute;
