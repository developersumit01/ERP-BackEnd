import mongoose, { Schema } from "mongoose";
import AddressSchema from "../../utils/AddressSchema";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const staffSchema = new Schema({
  userID: {
    type: Number,
    unique: true,
    required: true,
  },
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
  password: {
    type: String,
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

staffSchema.pre("save", async function (next) {
  if (!this.password.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

staffSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

staffSchema.methods.generateRefereshTeken = function () {
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
staffSchema.methods.generateAccessTeken = function () {
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
export default Staff = mongoose.model("Staff", staffSchema);
