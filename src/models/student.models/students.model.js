import mongoose, { Schema } from "mongoose";
import AddressSchema from "../../utils/AddressSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const studentSchema = new Schema({
  studentID: {
    type: {
      data: {
        typeNumber,
        unique: true,
        required: true,
      },
      editable: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
  },
  rollNo: {
    type: {
      data: {
        type: Number,
        unique: true,
      },
      editable: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
  },
  enrollmentNo: {
    type: {
      data: {
        type: Number,
        unique: true,
      },
      editable: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
  },
  name: {
    type: {
      data: {
        type: String,
        required: ture,
      },
      editable: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
  },
  photo: {
    type: {
      data: {
        type: String,
        required: true,
      },
      editable: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
  },
  fatherName: {
    type: {
      data: {
        type: String,
        required: ture,
      },
      editable: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
  },
  motherName: {
    type: {
      data: {
        type: String,
        required: ture,
      },
      editable: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
  },
  course: {
    type: {
      data: {
        type: Schema.Types.ObjectId,
        ref: "Course",
        required: true,
      },
      editable: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
  },
  section: {
    type: {
      data: {
        type: String,
      },
      editable: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
  },
  password: {
    type: String,
    required: true,
  },
  aadharNo: {
    type: {
      data: {
        type: Number,
        required: true,
      },
      editable: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
  },
  addmissionSession: {
    type: {
      data: {
        type: String,
        required: ture,
      },
      editable: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
  },
  addmissionSemester: {
    type: {
      data: {
        type: Number,
        required: ture,
      },
      editable: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
  },
  currentSemester: {
    type: {
      data: {
        type: Number,
        required: ture,
      },
      editable: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
  },
  contact: {
    mobileNo: {
      type: {
        data: {
          type: Number,
          required: true,
          unique: true,
        },
        editable: {
          type: Boolean,
          required: true,
          default: true,
        },
      },
    },
    email: {
      type: {
        data: {
          type: String,
          required: true,
        },
        editable: {
          type: Boolean,
          required: true,
          default: true,
        },
      },
    },
    homeMobile: {
      type: {
        data: {
          type: Number,
          required: true,
        },
        editable: {
          type: Boolean,
          required: true,
          default: true,
        },
      },
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
      course: {
        data: {
          type: String,
        },
        editable: {
          type: Boolean,
          required: true,
          default: true,
        },
      },
      branch: {
        data: {
          type: String,
        },
        editable: {
          type: Boolean,
          required: true,
          default: true,
        },
      },
      yearOfPassing: {
        data: {
          type: Number,
        },
        editable: {
          type: Boolean,
          required: true,
          default: true,
        },
      },
      marks: {
        data: {
          type: Number,
        },
        editable: {
          type: Boolean,
          required: true,
          default: true,
        },
      },
    },
  ],
});

studentSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

studentSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

studentSchema.methods.generateRefereshTeken = function () {
  return jwt.sign(
    {
      _id: this._id,
      name: this.name,
      rollNo: this.rollNo,
    },
    process.env.REFRESH_TOKEN_KEY,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};
studentSchema.methods.generateAccessTeken = function () {
  return jwt.sign(
    {
      _id: this._id,
      rollNo: this.rollNo,
    },
    process.env.ACCESS_TOKEN_KEY,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

export const Student = mongoose.model("Student", studentSchema);
