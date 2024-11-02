import mongoose, { Schema } from "mongoose";

const timeTableSchema = new Schema({
  section: {
    type: Schema.ObjectId,
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
                type: Schema.ObjectId,
                ref: "Teacher",
              },
              subject: {
                type: Schema.ObjectId,
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

export default TimeTable = mongoose.model("TimeTable", timeTableSchema);
