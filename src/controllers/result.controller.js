import mongoose from "mongoose";
import asyncHandler from "../utils/asyncHandler.js";
import { Student } from "../models/student.models/students.model.js";
import { APIError } from "../utils/APIError";
const GRADE_TABLE = [
    { maxMarks: 100, minMarks: 91, grade: "A+" },
    { maxMarks: 90, minMarks: 81, grade: "A" },
    { maxMarks: 80, minMarks: 71, grade: "B+" },
    { maxMarks: 70, minMarks: 61, grade: "B" },
    { maxMarks: 60, minMarks: 51, grade: "C+" },
    { maxMarks: 50, minMarks: 41, grade: "C" },
    { maxMarks: 40, minMarks: 30, grade: "D" },
    { maxMarks: 29, minMarks: 0, grade: "F" },
];
const createResult = asyncHandler(async (req, res) => {
    const { studentID, session, resultType, passingMarks, subjects } = req.body;
    try {
        const session = await mongoose.startSession();
        await session.withTransaction(async () => {
            const studentDetail = await Student.findOne({
                "studentID.value": studentID,
            }).session(session);
            if (!studentDetail) {
                throw new APIError(
                    402,
                    "Student not found for storing this result"
                );
            }
        });
    } catch (error) {}
});
