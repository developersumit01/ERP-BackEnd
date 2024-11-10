import mongoose, { Schema } from "mongoose";
import AddressSchema from "../../utils/AddressSchema";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const teacherSchema = new Schema({
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
        unique: true,
      },
      editable: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
    unique: true,
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
    required: ture,
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
    required: ture,
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
  password: {
    type: String,
    required: true,
  },
  aadharNo: {
    type: {
      name: {
        type: String,
        required: true,
        default: "Aadhar No",
      },
      value: {
        type: Number,
        required: true,
        unique: true,
      },
      editable: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
    required: ture,
  },
  joiningDate: {
    type: {
      name: {
        type: String,
        required: true,
        default: "Joining Date",
      },
      value: {
        type: Date,
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
        default: false,
      },
    },
    required: true,
  },
  post: {
    type: {
      name: {
        type: String,
        required: true,
        default: "Post",
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
          unique: true,
        },
        editable: {
          type: Boolean,
          required: true,
          default: false,
        },
      },
      required: true,
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
          unique: true,
        },
        editable: {
          type: Boolean,
          required: true,
          default: false,
        },
      },
    },
    required: true,
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
              default: false,
            },
          },
          required: true,
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
              default: false,
            },
          },
          required: true,
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
              default: false,
            },
          },
          required: true,
        },
        marks: {
          type: {
            name: {
              type: String,
              required: true,
              default: "Marks",
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
      },
    ],
    required: true,
  },
  experience: {
    type: [
      {
        organization: {
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
              default: false,
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
              default: false,
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
              default: false,
            },
          },
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
              default: false,
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
