import mongoose, { Schema } from "mongoose";

const subjectSchema = new Schema({
  subjectName: {
    type: String,
    required: true,
  },
  subjectCode: {
    type: Number,
    required: true,
    unique: true,
  },
  course: {
    type: [Schema.ObjectId],
    ref: "Course",
    required: true,
  },
  branch: {
    type: [Schema.ObjectId],
    ref: "Branch",
    required: true,
  },
  cradit: {
    type: Number,
    required: true,
  },
});

export default Subject = mongoose.model("Subject", subjectSchema);
