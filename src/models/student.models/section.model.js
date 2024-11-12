import mongoose, { Schema } from "mongoose";

const sectionSchema = new Schema({
  section: {
    type: String,
    required: true,
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  branch: {
    type: [Schema.Types.ObjectId],
    ref: "Branch",
  },
  session: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
});

export const Section = mongoose.model("Section", sectionSchema);
