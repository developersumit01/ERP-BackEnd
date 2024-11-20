import asyncHandler from "../utils/asyncHandler";

const addCourse = asyncHandler(async (req, res) => {
    // branches:- this is the branch id of branch schema, this data will not provided by frontend
    const { courseName, courseCode, duration, branchName, branchCode } =
        req.body;
});
