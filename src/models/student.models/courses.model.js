import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema({
  courseName: {
    type: String,
    required: true,
  },
  courseCode: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  branches: {
    type: [Schema.Types.ObjectId],
    ref: "Branch",
  },
});

export const Course = mongoose.model("Course", courseSchema);
