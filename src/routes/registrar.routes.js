import { Router } from "express";
import {
    addNewBranch,
    addNewCourse,
} from "../controllers/course.controller.js";
import { addSubject } from "../controllers/subject.controller.js";

const registrarRoute = Router();

registrarRoute.route("/add-course").post(addNewCourse);
registrarRoute.route("/add-branch").post(addNewBranch);
registrarRoute.route("/add-subject").post(addSubject);

export default registrarRoute;
