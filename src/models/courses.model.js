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
  branchName: {
    type: String,
    required: true,
  },
  branchCode: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
});

export default Course = mongoose.model("Course", courseSchema);
