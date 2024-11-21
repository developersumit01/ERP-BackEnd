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

export const Branch = mongoose.model("Branch", branchSchema);
