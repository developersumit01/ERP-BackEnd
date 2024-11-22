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
    // This line is commented for only test the code
    // const cloudinaryURL = await uploadFileOnCloudinary(studentImagePath);
    const cloudinaryURL = {
        url: studentImagePath,
        public_id: "publicId124569",
    };
    if (!cloudinaryURL.url) {
        throw new APIError(
            500,
            "There is some internal error while uploading the file"
        );
    }
    // This logic is use to generate studentID
    // studentID :- CurrentYear+CollegeCode+totalStudent

    const addmissionSession = `${new Date().getFullYear().toString().substring(2, 4)}${`${(new Date().getFullYear() + 1).toString().substring(2, 4)}`}`;

    const session = await mongoose.startSession();
    let result = undefined;
    // Stored data in database
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
            const totalStudent = await Student.aggregate([
                {
                    $match: {
                        "course.value": courseInfo._id,
                    },
                },
                {
                    $match: {
                        "branch.value": branchInfo._id,
                    },
                },
                {
                    $match: {
                        "addmissionSession.value": addmissionSession,
                    },
                },
            ]);
            const studentID = `${new Date().getFullYear().toString().substring(2, 4)}${COLLEGE_CODE}${branchInfo.branchCode}${(totalStudent.length + 1).toString().padStart(3, 0)}`;
            if (!studentID) {
                throw new APIError(500, "Not able to generate student ID");
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

const loginStudent = asyncHandler(async (req, res) => {
    const { userID, password } = req.body;
    try {
        let studentID, rollNo, email;
        if (userID.toString().length == 10) {
            studentID = userID;
        } else if (userID.toString().includes("@")) {
            email = userID;
        } else {
            rollNo = userID;
        }
        const studentInfo = await Student.findOne({
            $or: [
                { "studentID.value": studentID },
                { "email.value": email },
                { "contact.rollNo.value": rollNo },
            ],
        });
        if (!studentInfo) {
            throw new APIError(402, "StudentID is invalid");
        }
        const isCorrect = await studentInfo.isPasswordCorrect(password);
        if (!isCorrect) {
            throw new APIError(402, "Incorrect password");
        }
        res.status(200).json({ studentID: studentInfo.studentID });
    } catch (error) {
        throw new APIError(500, error?.message, [error]);
    }
});

const getStudentInfo = asyncHandler(async (req, res) => {});

export { registerStudent, loginStudent };

// This is the code for generating the student ID
// I will put this thing in transaction

// const totalStudent = await Student.find();
// studentData.studentID = `${new Date().getFullYear().toString().substring(2, 4)}${COLLEGE_CODE}${totalStudent.length.toString().padStart(3, 0)}`;
