import mongoose from "mongoose";
import { Branch } from "../models/college.models/branchs.model.js";
import { APIError } from "../utils/APIError.js";
import asyncHandler from "../utils/asyncHandler.js";
import { Course } from "../models/college.models/courses.model.js";
import { Subject } from "../models/student.models/subjects.model.js";
import { APIResponce } from "../utils/APIResponce.js";

const addSubject = asyncHandler(async (req, res) => {
    const { subjectName, subjectCode, course, branchs, cradit } = req.body;
    try {
        const session = await mongoose.startSession();
        session.withTransaction(async () => {
            const branch = await Branch.find({
                branchName: { $in: branchs },
            }).session(session);
            if (!branch) {
                throw new APIError(
                    500,
                    "Their is some error while getting the branchs information to add subject"
                );
            }
            const branchArray = branch.map((ele) => ele._id);
            const courseInfo = await Course.findOne({
                courseName: course,
            }).session(session);
            if (!courseInfo) {
                throw new APIError(
                    500,
                    "Their is some error while getting the course information to add subject"
                );
            }
            const subjectInfoToSave = {
                subjectCode: subjectCode,
                subjectName: subjectName,
                course: courseInfo._id,
                branchs: branchArray,
                cradit: cradit,
            };
            const result = await Subject.create([subjectInfoToSave], {
                session: session,
            });
            if (!result) {
                throw new APIError(
                    500,
                    "Sorry! Getting error while saving the subject information"
                );
            }
        });
    } catch (error) {
        throw new APIError(error?.statusCode, error?.message, [error]);
    }
    res.status(201).send(
        new APIResponce(
            201,
            { subjectCode: subjectCode, subjectName, subjectName },
            "Subject stored successfully"
        )
    );
});

export { addSubject };
