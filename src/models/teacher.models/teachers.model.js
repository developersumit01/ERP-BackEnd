import mongoose, { Schema } from "mongoose";
import AddressSchema from "../../utils/AddressSchema";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const teacherSchema = new Schema({
  userID: {
    type: Number,
    unique: true,
    required: true,
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
  password: {
    type: String,
    required: true,
  },
  aadharNo: {
    type: Number,
    required: ture,
  },
  joiningDate: {
    type: Date,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  post: {
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
      required: true,
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
          required: true,
        },
        branch: {
          type: String,
        },
        yearOfPassing: {
          type: String,
          required: true,
        },
        marks: {
          type: Number,
          required: true,
        },
      },
    ],
    required: true,
  },
  experience: {
    type: [
      {
        organigation: {
          type: String,
        },
        yearOfExperience: {
          type: Number,
          required: true,
        },
        salary: {
          type: Number,
          required: true,
          default: 0,
        },
        role: {
          type: String,
          required: true,
        },
      },
    ],
    required: true,
  },
  refreshToken: {
    type: String,
    required: true,
  },
});

teacherSchema.pre("save", async function (next) {
  if (!this.password.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

teacherSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

teacherSchema.methods.generateRefereshTeken = function () {
  return jwt.sign(
    {
      _id: this._id,
      userID: this.userID,
      name: this.name,
    },
    process.env.REFRESH_TOKEN_KEY,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};
teacherSchema.methods.generateAccessTeken = function () {
  return jwt.sign(
    {
      _id: this._id,
      userID: this.userID,
    },
    process.env.ACCESS_TOKEN_KEY,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

export default Teacher = mongoose.model("Teacher", teacherSchema);
