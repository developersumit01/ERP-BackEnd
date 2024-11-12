import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema({
  isbn: {
    type: String,
    required: true,
  },
  author: {
    type: [String],
    required: true,
  },
  tittle: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  edition: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
  },
  totalCopies: {
    type: Number,
    required: true,
  },
  availableCopies: {
    type: Number,
    required: true,
  },
  borrowHistory: {
    type: [
      {
        borrowerID: {
          type: String,
          required: true,
        },
        borrowDate: {
          type: String,
          required: true,
        },
        dueDate: {
          type: String,
        },
        returnDate: {
          type: String,
        },
      },
    ],
  },
  keywords: {
    type: [String],
  },
});

export const Book = mongoose.model("Book", bookSchema);
