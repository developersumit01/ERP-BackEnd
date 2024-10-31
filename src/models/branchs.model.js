import mongoose, { Schema } from "mongoose";

const branchSchema = new Schema({
  branchName: {
    type: String,
    required: true,
  },
  branchCode: {
    type: Number,
    required: true,
    unique: true,
  },
});

export default Branch = mongoose.model("Branch", branchSchema);
