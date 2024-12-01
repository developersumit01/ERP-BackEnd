import mongoose, { Schema } from "mongoose";

const subjectSchema = new Schema({
    subjectName: {
        type: String,
        required: true,
    },
    subjectCode: {
        type: String,
        required: true,
        unique: true,
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: "Course",
        required: true,
    },
    branchs: {
        type: [Schema.Types.ObjectId],
        ref: "Branch",
    },
    cradit: {
        type: Number,
        required: true,
    },
    subjectType: {
        type: String,
        required: true,
        default: "Regular",
    },
    semester: {
        type: Number,
        required: true,
    },
});

export const Subject = mongoose.model("Subject", subjectSchema);
