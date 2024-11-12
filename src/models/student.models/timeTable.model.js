import mongoose, { Schema } from "mongoose";

const timeTableSchema = new Schema({
  section: {
    type: Schema.Types.ObjectId,
    ref: "Section",
  },
  timeTable: {
    type: [
      {
        day: {
          type: String,
          required: true,
        },
        lactures: {
          type: [
            {
              teacher: {
                type: Schema.Types.ObjectId,
                ref: "Teacher",
              },
              subject: {
                type: Schema.Types.ObjectId,
                ref: "Subject",
              },
              time: {
                type: String,
                required: true,
              },
            },
          ],
        },
      },
    ],
  },
});

export const TimeTable = mongoose.model("TimeTable", timeTableSchema);
