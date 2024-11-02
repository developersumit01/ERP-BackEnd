import mongoose, { Schema } from "mongoose";

const quizSubmittedSchema = new Schema({
  studentID: {
    type: Schema.ObjectId,
    ref: "Student",
    required: true,
  },
  quizID: {
    type: Schema.ObjectId,
    ref: "Quiz",
    required: true,
  },
  marksObtained: {
    type: Number,
    required: true,
  },
});

export default QuizSubmitted = mongoose.model(
  "QuizSubmitted",
  quizSubmittedSchema
);
