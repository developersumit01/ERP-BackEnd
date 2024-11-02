import mongoose, { Schema } from "mongoose";
import AddressSchema from "../../utils/AddressSchema";

const staffSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  aadharNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  joiningDate: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  contact: {
    mobileNo: {
      type: Number,
      required: true,
      unique: true,
    },
    email: {
      type: String,
    },
  },
  address: {
    type: AddressSchema,
    required: true,
  },
  qualification: {
    type: [
      {
        course: {
          type: String,
        },
        branch: {
          type: String,
        },
        yearOfPassing: {
          type: String,
        },
        marks: {
          type: Number,
        },
      },
    ],
  },
  experience: {
    type: [
      {
        organigation: {
          type: String,
        },
        yearOfExperience: {
          type: Number,
        },
        salary: {
          type: Number,
          default: 0,
        },
        role: {
          type: String,
        },
      },
    ],
  },
  refreshToken: {
    type: String,
    required: true,
  },
});

export default Staff = mongoose.model("Staff", staffSchema);
