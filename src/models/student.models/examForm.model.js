import mongoose, { Schema } from "mongoose";

const examFromSchema = new Schema({
    studentID: {
        type: Schema.Types.ObjectId,
        ref: "Student",
        required: true,
    },
    semester: {
        type: Number,
        required: true,
    },
    session: {
        type: String,
        required: true,
    },
    examType: {
        type: String,
        required: true,
    },
    subjects: [
        {
            subjectID: {
                type: Schema.Types.ObjectId,
                ref: "Subject",
                required: true,
            },
            internalAttandance: {
                type: String,
                default: "N",
                required: true,
            },
            externalAttandance: {
                type: String,
                default: "N",
                required: true,
            },
        },
    ],
});
