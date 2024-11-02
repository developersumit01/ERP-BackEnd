import mongoose, { mongo, Schema } from "mongoose";

const teacherAttandanceSchema = new Schema({
  teacherID: {
    type: Schema.ObjectId,
    ref: "Teacher",
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
              mark: {
                type: [String],
              },
              time: {
                type: Date,
                required: true,
              },
            },
          ],
        },
      },
    ],
  },
});

export default TeacherAttandance = mongoose.model(
  "TeacherAttandance",
  teacherAttandanceSchema
);
