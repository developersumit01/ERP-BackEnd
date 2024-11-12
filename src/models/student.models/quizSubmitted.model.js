import mongoose, { Schema } from "mongoose";

const quizSubmittedSchema = new Schema({
  studentID: {
    type: Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  quizID: {
    type: Schema.Types.ObjectId,
    ref: "Quiz",
    required: true,
  },
  marksObtained: {
    type: Number,
    required: true,
  },
});

export const QuizSubmitted = mongoose.model(
  "QuizSubmitted",
  quizSubmittedSchema
);
