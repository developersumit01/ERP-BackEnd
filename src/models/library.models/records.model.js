import mongoose, { Schema } from "mongoose";

const libraryRecordSchema = new Schema({
  studentID: {
    type: Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  books: {
    type: [
      {
        isbn: {
          type: String,
          required: true,
        },
        book: {
          type: Schema.Types.ObjectId,
          ref: "Book",
        },
        issueDate: {
          type: Date,
          required: true,
        },
        issuedBy: {
          type: "Staff",
          required: true,
        },
      },
    ],
  },
});

export default LibraryRecord = mongoose.model(
  "LibraryRecord",
  libraryRecordSchema
);
