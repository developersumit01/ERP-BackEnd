import { Router } from "express";
import {
    addNewBranch,
    addNewCourse,
} from "../controllers/course.controller.js";

const registrarRoute = Router();

registrarRoute.route("/add-course").post(addNewCourse);
registrarRoute.route("/add-branch").post(addNewBranch);

export default registrarRoute;
