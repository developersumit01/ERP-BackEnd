import mongoose, { Schema } from "mongoose";
import AddressSchema from "../../utils/AddressSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const studentSchema = new Schema({
    studentID: {
        type: {
            value: {
                type: Number,
                unique: true,
                required: true,
            },
            editable: {
                type: Boolean,
                required: true,
                default: false,
            },
            name: {
                type: String,
                required: true,
                default: "Student ID",
            },
        },
    },
    rollNo: {
        type: {
            value: {
                type: Number,
            },
            editable: {
                type: Boolean,
                required: true,
                default: false,
            },
            name: {
                type: String,
                required: true,
                default: "Roll No",
            },
        },
    },
    enrollmentNo: {
        type: {
            value: {
                type: Number,
            },
            editable: {
                type: Boolean,
                required: true,
                default: false,
            },
            name: {
                type: String,
                required: true,
                default: "Enrollment No",
            },
        },
    },
    name: {
        type: {
            value: {
                type: String,
                required: true,
            },
            editable: {
                type: Boolean,
                required: true,
                default: false,
            },
            name: {
                type: String,
                required: true,
                default: "Name",
            },
        },
    },
    photo: {
        type: {
            value: {
                type: String,
                required: true,
            },
            editable: {
                type: Boolean,
                required: true,
                default: false,
            },
            name: {
                type: String,
                required: true,
                default: "Photo",
            },
        },
    },
    fatherName: {
        type: {
            value: {
                type: String,
                required: true,
            },
            editable: {
                type: Boolean,
                required: true,
                default: false,
            },
            name: {
                type: String,
                required: true,
                default: "Father Name",
            },
        },
    },
    motherName: {
        type: {
            value: {
                type: String,
                required: true,
            },
            editable: {
                type: Boolean,
                required: true,
                default: false,
            },
            name: {
                type: String,
                required: true,
                default: "Mother Name",
            },
        },
    },
    dateOfBirth: {
        type: {
            value: {
                type: String,
                required: true,
            },
            editable: {
                type: Boolean,
                required: true,
                default: false,
            },
            name: {
                type: String,
                required: true,
                default: "D.O.B.",
            },
        },
    },
    gender: {
        type: {
            value: {
                type: String,
                required: true,
            },
            editable: {
                type: Boolean,
                required: true,
                default: false,
            },
            name: {
                type: String,
                required: true,
                default: "Gender",
            },
        },
    },
    course: {
        type: {
            value: {
                type: Schema.Types.ObjectId,
                ref: "Course",
                required: true,
            },
            editable: {
                type: Boolean,
                required: true,
                default: false,
            },
            name: {
                type: String,
                required: true,
                default: "Course",
            },
        },
    },
    branch: {
        type: {
            value: {
                type: Schema.Types.ObjectId,
                ref: "Branch",
            },
            editable: {
                type: Boolean,
                required: true,
                default: false,
            },
            name: {
                type: String,
                required: true,
                default: "Branch",
            },
        },
    },
    section: {
        type: {
            value: {
                type: String,
            },
            editable: {
                type: Boolean,
                required: true,
                default: false,
            },
            name: {
                type: String,
                default: "Section",
            },
        },
    },
    password: {
        type: String,
        required: true,
    },
    aadharNo: {
        type: {
            value: {
                type: Number,
                required: true,
            },
            editable: {
                type: Boolean,
                required: true,
                default: false,
            },
            name: {
                type: String,
                required: true,
                default: "Aadhar No",
            },
        },
    },
    addmissionSession: {
        type: {
            value: {
                type: String,
                required: true,
            },
            editable: {
                type: Boolean,
                required: true,
                default: false,
            },
            name: {
                type: String,
                required: true,
                default: "Addmission Session",
            },
        },
    },
    addmissionSemester: {
        type: {
            value: {
                type: Number,
                required: true,
            },
            editable: {
                type: Boolean,
                required: true,
                default: false,
            },
            name: {
                type: String,
                required: true,
                default: "Addmission Semester",
            },
        },
    },
    currentSemester: {
        type: {
            value: {
                type: Number,
                required: true,
            },
            editable: {
                type: Boolean,
                required: true,
                default: false,
            },
            name: {
                type: String,
                required: true,
                default: "Current Semester",
            },
        },
    },
    contact: {
        mobileNo: {
            type: {
                value: {
                    type: Number,
                    required: true,
                    unique: true,
                },
                editable: {
                    type: Boolean,
                    required: true,
                    default: true,
                },
                name: {
                    type: String,
                    required: true,
                    default: "Mobile No",
                },
            },
        },
        email: {
            type: {
                value: {
                    type: String,
                    required: true,
                },
                editable: {
                    type: Boolean,
                    required: true,
                    default: true,
                },
                name: {
                    type: String,
                    required: true,
                    default: "Email ID",
                },
            },
        },
        homeMobile: {
            type: {
                value: {
                    type: Number,
                    required: true,
                },
                editable: {
                    type: Boolean,
                    required: true,
                    default: true,
                },
                name: {
                    type: String,
                    required: true,
                    default: "Home Mobile No",
                },
            },
        },
    },
    address: {
        type: AddressSchema,
    },
    refreshToken: {
        type: String,
    },
    otp: {
        type: String,
    },
    qualifications: [
        {
            course: {
                value: {
                    type: String,
                },
                editable: {
                    type: Boolean,
                    required: true,
                    default: true,
                },
            },
            branch: {
                value: {
                    type: String,
                },
                editable: {
                    type: Boolean,
                    required: true,
                    default: true,
                },
            },
            yearOfPassing: {
                value: {
                    type: Number,
                },
                editable: {
                    type: Boolean,
                    required: true,
                    default: true,
                },
            },
            marks: {
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
