import mongoose from "mongoose";
import asyncHandler from "../utils/asyncHandler.js";
import { Student } from "../models/student.models/students.model.js";
import { APIError } from "../utils/APIError.js";
import { ExamForm } from "../models/student.models/examForm.model.js";
import { APIResponce } from "../utils/APIResponce.js";

const examForm = asyncHandler(async (req, res) => {
    const { studentID, semester, session, examType, subjects } = req.body;
    //     subjectID,internalAttandance,externalAttandance
    try {
        const transactionSession = await mongoose.startSession();
        await transactionSession.withTransaction(async () => {
            const student = await Student.findOne({
                "studentID.value": studentID,
            }).session(transactionSession);
            if (!student) {
                throw new APIError(
                    500,
                    "Sorry! Their is some error while finding student information"
                );
            }
            if (student.currentSemester.value != semester) {
                throw new APIError(
                    402,
                    "Current semester does not match with current semester"
                );
            }
            const examFormData = {
                studentID: student._id,
                semester: semester,
                session: session,
                examType: examType,
                subjects: subjects,
            };
            const result = await ExamForm.create([examFormData], {
                session: transactionSession,
            });
        });
        if (!ressult) {
            throw new APIError(
                500,
                "Their is some server error while submiting exam form"
            );
        }
        res.status(201).send(
            new APIResponce(201, {}, "Exam form successfully submited")
        );
    } catch (error) {
        throw new APIError(error?.statusCode, error?.message, [error]);
    }
});

const getExamForm = asyncHandler(async () => {
    const { studentID, semester, session, examType, subjects } = req.body;
});
export { examForm };
