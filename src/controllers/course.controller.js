import mongoose from "mongoose";
import { Branch } from "../models/student.models/branchs.model.js";
import { APIError } from "../utils/APIError.js";
import asyncHandler from "../utils/asyncHandler.js";
import { TRANSACTION_OPTIONS } from "../constants.js";
import { Course } from "../models/student.models/courses.model.js";
import { APIResponce } from "../utils/APIResponce.js";

const addNewBranch = asyncHandler(async (req, res) => {
    const { courseName, branchName, branchCode } = req.body;
    const branch = {
        branchName,
        branchCode,
    };

    const session = await mongoose.startSession();
    let result = undefined;
    try {
        await session.withTransaction(async () => {
            let course = undefined;
            await Branch.create([branch], {
                session: session,
            });
            const branchId = await Branch.findOne({
                branchName: branchName,
                branchCode: branchCode,
            }).session(session);
            console.log(branchId);
            const courseInfo = await Course.updateOne(
                { courseName: courseName },
                { $push: { branches: branchId._id } }
            );
            if (courseInfo.modifiedCount == 0) {
                session.abortTransaction();
                throw new APIError(
                    500,
                    "some server issue while updating the branch information"
                );
            }
        }, TRANSACTION_OPTIONS);
    } catch (error) {
        console.log(error);
        await session.endSession();
        throw new APIError(error?.statusCode, error?.message, [error]);
    }
    if (!result) {
        throw new APIError(
            500,
            "There is some error while storing the branch information"
        );
    }
    res.status(201).json(
        new APIResponce(201, {}, "The branch added successfully")
    );
});

const addNewCourse = asyncHandler(async (req, res) => {
    try {
        const { courseName, courseCode, duration } = req.body;

        const course = { courseName, courseCode, duration };

        const checkCourse = await Course.findOne({
            courseCode: courseCode,
            courseName: courseName,
        });
        if (checkCourse) {
            console.log("Check course found");
            throw new APIError(402, "This course is already exists");
        }

        const result = await Course.create(course);

        if (!result) {
            throw new APIError(
                500,
                "There is some server error while storing the course information"
            );
        }

        res.status(201).json(
            new APIResponce(201, {}, "The course is successfully stored")
        );
    } catch (error) {
        console.log("the error is ", error);
        throw new APIError(error?.statusCode, error?.message, [error]);
    }
});

export { addNewBranch, addNewCourse };
