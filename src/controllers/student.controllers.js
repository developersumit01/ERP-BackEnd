import mongoose from "mongoose";
import { COLLEGE_CODE, TRANSACTION_OPTIONS } from "../constants.js";
import { Student } from "../models/student.models/students.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import { APIError } from "../utils/APIError.js";
import { Course } from "../models/college.models/courses.model.js";
import { Branch } from "../models/college.models/branchs.model.js";
import { uploadFileOnCloudinary } from "../utils/cloudinary.js";
const registerStudent = asyncHandler(async (req, res) => {
    const {
        name,
        fatherName,
        motherName,
        gender,
        dateOfBirth,
        course, // ObjetcID of the course model
        branch, // ObjectID of the Branch model
        aadharNo,
        addmissionSemester,
        currentSemester,
        mobileNo,
        email,
        homeMobile,
    } = req.body;

    const defaultPassword = `${name}@${new Date().getFullYear().toString().substring(2, 4)}${COLLEGE_CODE}`;

    const studentImagePath = req.file?.path;
    if (!studentImagePath) {
        throw new APIError(
            500,
            "There is some error while getting the student image provided by you"
        );
    }
    const cloudinaryURL = await uploadFileOnCloudinary(studentImagePath);
    if (!cloudinaryURL.url) {
        throw new APIError(
            500,
            "There is some internal error while uploading the file"
        );
    }
    // This logic is use to generate studentID
    // studentID :- CurrentYear+CollegeCode+totalStudent
    const totalStudent = await Student.find();
    const studentID = `${new Date().getFullYear().toString().substring(2, 4)}${COLLEGE_CODE}${totalStudent.length.toString().padStart(3, 0)}`;

    const addmissionSession = `${new Date().getFullYear().toString().substring(2, 4)}${`${(new Date().getFullYear() + 1).toString().substring(2, 4)}`}`;

    const session = await mongoose.startSession();
    let result = undefined;
    try {
        await session.withTransaction(async () => {
            const courseInfo = await Course.findOne({
                courseName: course,
            }).session(session);
            const branchInfo = await Branch.findOne({
                branchName: branch,
            }).session(session);
            if (!courseInfo || !branchInfo) {
                throw new APIError(
                    402,
                    "There is some error while getting the course and branch information"
                );
            }
            const studentData = {
                studentID: {
                    value: studentID,
                },
                name: {
                    value: name,
                },
                fatherName: {
                    value: fatherName,
                },
                motherName: {
                    value: motherName,
                },
                gender: {
                    value: gender,
                },
                dateOfBirth: {
                    value: dateOfBirth,
                },
                course: {
                    value: courseInfo._id,
                },
                branch: {
                    value: branchInfo._id,
                },
                aadharNo: {
                    value: aadharNo,
                },
                addmissionSemester: {
                    value: addmissionSemester,
                },
                addmissionSession: {
                    value: addmissionSession,
                },
                currentSemester: {
                    value: currentSemester,
                },
                contact: {
                    mobileNo: {
                        value: mobileNo,
                    },
                    email: {
                        value: email,
                    },
                    homeMobile: {
                        value: homeMobile,
                    },
                },
                password: defaultPassword,
                photo: {
                    value: cloudinaryURL.url,
                    publicID: cloudinaryURL.public_id,
                },
            };
            result = await Student.create([studentData], {
                session: session,
            });
        }, TRANSACTION_OPTIONS);
    } catch (error) {
        console.log(error);
        await session.endSession();
    }
    if (!result) {
        throw new APIError(500, "error while saving the data");
    }
    res.json(result);
});

export { registerStudent };

// This is the code for generating the student ID
// I will put this thing in transaction

// const totalStudent = await Student.find();
// studentData.studentID = `${new Date().getFullYear().toString().substring(2, 4)}${COLLEGE_CODE}${totalStudent.length.toString().padStart(3, 0)}`;
