import mongoose, { Schema } from "mongoose";
import AddressSchema from "../../utils/AddressSchema";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const staffSchema = new Schema({
  userID: {
    type: {
      name: {
        type: String,
        required: true,
        default: "User ID",
      },
      value: {
        type: Number,
        required: true,
      },
      editable: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
    required: true,
  },
  name: {
    type: {
      name: {
        type: String,
        required: true,
        default: "Name",
      },
      value: {
        type: String,
        required: true,
      },
      editable: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
    required: true,
  },
  fatherName: {
    type: {
      name: {
        type: String,
        required: true,
        default: "Father Name",
      },
      value: {
        type: String,
        required: true,
      },
      editable: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
    required: true,
  },
  motherName: {
    type: {
      name: {
        type: String,
        required: true,
        default: "Mother Name",
      },
      value: {
        type: String,
        required: true,
      },
      editable: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
    required: true,
  },
  aadharNumber: {
    type: {
      name: {
        type: String,
        required: true,
        default: "Aadhar No",
      },
      value: {
        type: Number,
        required: true,
      },
      editable: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
    required: true,
    unique: true,
  },
  joiningDate: {
    type: {
      name: {
        type: String,
        required: true,
        default: "Joining Date",
      },
      value: {
        type: String,
        required: true,
      },
      editable: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
    required: true,
  },
  salary: {
    type: {
      name: {
        type: String,
        required: true,
        default: "Salary",
      },
      value: {
        type: Number,
        required: true,
      },
      editable: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  contact: {
    mobileNo: {
      type: {
        name: {
          type: String,
          required: true,
          default: "Mobile No",
        },
        value: {
          type: Number,
          required: true,
        },
        editable: {
          type: Boolean,
          required: true,
          default: true,
        },
      },
      required: true,
      unique: true,
    },
    email: {
      type: {
        name: {
          type: String,
          required: true,
          default: "Email",
        },
        value: {
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
  },
  address: {
    type: AddressSchema,
    required: true,
  },
  qualification: {
    type: [
      {
        course: {
          type: {
            name: {
              type: String,
              required: true,
              default: "Course",
            },
            value: {
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
        branch: {
          type: {
            name: {
              type: String,
              required: true,
              default: "Branch",
            },
            value: {
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
        yearOfPassing: {
          type: {
            name: {
              type: String,
              required: true,
              default: "Year Of Passing",
            },
            value: {
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
        marks: {
          type: {
            name: {
              type: String,
              required: true,
              default: "Marks",
            },
            value: {
              type: Numbr,
              required: true,
              default: 0,
            },
            editable: {
              type: Boolean,
              required: true,
              default: true,
            },
          },
        },
      },
    ],
  },
  experience: {
    type: [
      {
        organigation: {
          type: {
            name: {
              type: String,
              required: true,
              default: "Organization",
            },
            value: {
              type: String,
            },
            editable: {
              type: Boolean,
              required: true,
              default: true,
            },
          },
        },
        yearOfExperience: {
          type: {
            name: {
              type: String,
              required: true,
              default: "Year Of Experience",
            },
            value: {
              type: Number,
            },
            editable: {
              type: Boolean,
              required: true,
              default: true,
            },
          },
        },
        salary: {
          type: {
            name: {
              type: String,
              required: true,
              default: "Salary",
            },
            value: {
              type: Number,
            },
            editable: {
              type: Boolean,
              required: true,
              default: true,
            },
          },
          default: 0,
        },
        role: {
          type: {
            name: {
              type: String,
              required: true,
              default: "Role",
            },
            value: {
              type: String,
            },
            editable: {
              type: Boolean,
              required: true,
              default: true,
            },
          },
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
