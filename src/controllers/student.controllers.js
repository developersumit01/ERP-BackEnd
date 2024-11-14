import mongoose from "mongoose";
import { COLLEGE_CODE } from "../constants.js";
import { Student } from "../models/student.models/students.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import { APIError } from "../utils/APIError.js";
import uploadFileOnCloudinary from "../utils/cloudinary.js";
const registerStudent = asyncHandler(async (req, res) => {
    /*
            rollNo -> this will generate when the all the addmission will close, then after sorting the data by name and branch the rollNo will generate,

            enrollmentNo -> this will generate before save the student data in databse automaticlly

            password -> initial this data will same for everyone but after first time login the student have to reset their password of forget there password

            addmissionSession -> this data will set according to which session the student get register the method to get the session we use Date class of the Node

            qualifications -> this data should be entered by student itself after login

            section -> section will set when the class successfuly start by HOD
*/

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
    } = req.body;

    const defaultPassword = `${name}@${new Date().getFullYear().toString().substring(2, 4)}${COLLEGE_CODE}`;

    const studentImagePath = req.file?.path;
    if (!studentImagePath) {
        throw new APIError(
            500,
            "There is some error while getting the student image provided by you"
        );
    }
    // const cloudinaryURL = await uploadFileOnCloudinary(studentImagePath);
    const cloudinaryURL = {
        url: studentImagePath,
    };
    if (!cloudinaryURL.url) {
        throw new APIError(
            500,
            "There is some internal error while uploading the file"
        );
    }

    const totalStudent = await Student.find();
    const studentID = `${new Date().getFullYear().toString().substring(2, 4)}${COLLEGE_CODE}${totalStudent.length.toString().padStart(3, 0)}`;
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
            value: new mongoose.Types.ObjectId(1001),
        },
        branch: {
            value: new mongoose.Types.ObjectId(1002),
        },
        aadharNo: {
            value: aadharNo,
        },
        addmissionSemester: {
            value: addmissionSemester,
        },
        currentSemester: {
            value: currentSemester,
        },
        mobileNo: {
            value: mobileNo,
        },
        email: {
            value: email,
        },
        password: defaultPassword,
        photo: {
            value: cloudinaryURL.url,
        },
        homeMobile: {
            value: 8574963258,
        },
    };

    const result = await Student.create(studentData);
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
