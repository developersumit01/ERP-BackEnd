import mongoose, { mongo, Schema } from "mongoose";

const studentAttandanceSchema = new Schema({
  studentID: {
    type: Schema.Types.ObjectId,
    ref: "Student",
  },
  semester: {
    type: Number,
    required: true,
  },
  session: {
    type: String,
    required: true,
  },
  attandance: {
    type: [
      {
        month: {
          type: String,
          required: true,
        },
        attand: {
          type: [
            {
              subject: {
                type: Schema.Types.ObjectId,
                ref: "Subject",
              },
              mark: {
                type: [String],
              },
            },
          ],
        },
      },
    ],
  },
});

export default StudentAttandance = mongoose.model(
  "StudentAttandance",
  studentAttandanceSchema
);
