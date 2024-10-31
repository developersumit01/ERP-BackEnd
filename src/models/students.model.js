import mongoose, { Schema } from "mongoose";
import AddressSchema from "../utils/AddressSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const studentSchema = new Schema({
  rollNo: {
    type: Number,
    unique: true,
  },
  enrollmentNo: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
    required: ture,
  },
  fatherName: {
    type: String,
    required: ture,
  },
  motherName: {
    type: String,
    required: ture,
  },
  course: {
    type: Schema.ObjectId,
    ref: "Course",
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  aadharNo: {
    type: Number,
    required: ture,
  },
  addmissionSession: {
    type: String,
    required: ture,
  },
  addmissionSemester: {
    type: Number,
    required: ture,
  },
  currentSemester: {
    type: Number,
    required: ture,
  },
  contact: {
    mobileNo: {
      type: Number,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    homeMobile: {
      type: Number,
      required: true,
    },
  },
  address: {
    type: AddressSchema,
    required: true,
  },
  refreshToken: {
    type: String,
    required: true,
  },
  qualifications: [
    {
      course: String,
      branch: String,
      yearOfPassing: String,
      marks: Number,
    },
  ],
});

studentSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = bcrypt.hash(this.password, 10);
  next();
});

studentSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export default Student = mongoose.model("Student", studentSchema);
