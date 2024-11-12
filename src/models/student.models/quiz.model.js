import mongoose, { Schema } from "mongoose";

const quizSchema = new Schema({
  subjectID: {
    type: Schema.Types.ObjectId,
    ref: "Subject",
    required: true,
  },
  quizs: {
    type: [
      {
        question: {
          type: String,
          required: true,
        },
        options: {
          type: [String],
          required: true,
        },
      },
    ],
  },
  quizAns: {
    type: [
      {
        question: {
          type: String,
          required: true,
        },
        answer: {
          type: String,
          required: true,
        },
      },
    ],
    required: true,
  },
  marksPerQuestion: {
    type: Number,
    required: true,
  },
});

export const Quiz = mongoose.model("Quiz", quizSchema);
