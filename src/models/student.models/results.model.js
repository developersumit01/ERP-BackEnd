import mongoose, { Schema } from "mongoose";

const resultSchema = new Schema({
    studentID: {
        type: Schema.Types.ObjectId,
        ref: "Student",
        required: true,
    },
    session: {
        type: String,
        required: true,
    },
    totalMarks: {
        type: Number,
        required: true,
    },
    obtainMarks: {
        type: Number,
    },
    resultType: {
        type: String,
        required: true,
    },
    resultStatus: {
        type: String,
    },
    passingMarks: {
        type: Number,
        required: true,
        default: 30,
    },
    subjects: [
        {
            subjectID: {
                type: Schema.Types.ObjectId,
                ref: "Subject",
                required: true,
            },
            obtainMarks: {
                type: Number,
                required: true,
                default: -1,
            },
            internalMarks: {
                type: Number,
                required: true,
                default: -1,
            },
            grade: {
                type: String,
                required: true,
            },
        },
    ],
    cop: {
        type: [Schema.Types.ObjectId],
        ref: "Subject",
    },
});

export const Result = mongoose.model("Result", resultSchema);
