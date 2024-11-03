import mongoose, { Schema } from "mongoose";

const quizAuthorisedSchema = new Schema({
  branchID: {
    type: Schema.Types.ObjectId,
    ref: "Branch",
    required: true,
  },
  courseID: {
    type: Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  quizID: {
    type: Schema.Types.ObjectId,
    ref: "Quiz",
    required: true,
  },
  semester: {
    type: Number,
    required: true,
  },
});

export default QuizAuthorised = mongoose.model(
  "QuizAuthorised",
  quizAuthorisedSchema
);
