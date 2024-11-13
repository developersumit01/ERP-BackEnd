export const error = {
    Name: [
        { "error name": "required", regex: /\S/, message: "Name is required" },
        {
            "error name": "Only character",
            regex: /^([a-zA-Z]+\s)*[a-zA-Z]+$/,
            message: "Enter only character in your name",
        },
    ],
    "Father Name": [
        {
            "error name": "required",
            regex: /\S/,
            message: "Father name is required",
        },
        {
            "error name": "Only character",
            regex: /^([a-zA-Z]+\s)*[a-zA-Z]+$/,
            message: "Enter only character in your father name",
        },
    ],
    "Mother Name": [
        {
            "error name": "required",
            regex: /\S/,
            message: "Mother name is required",
        },
        {
            "error name": "Only character",
            regex: /^([a-zA-Z]+\s)*[a-zA-Z]+$/,
            message: "Enter only character in your mother name",
        },
    ],
    Gender: [
        {
            "error name": "required",
            regex: /\S/,
            message: "Gender is required",
        },
    ],
    "D.O.B.": [
        {
            "error name": "required",
            regex: /\S/,
            message: "Date of birth is required",
        },
        {
            "error name": "D.O.B.",
            regex: /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{4}$/,
            message: "Date formate is dd/mm/yyy",
        },
    ],
    Course: [
        {
            "error name": "required",
            regex: /\S/,
            message: "Course is required",
        },
        {
            "error name": "Only Character",
            regex: /^([a-zA-Z]+\s)*[a-zA-Z]+$/,
            message: "Course should contain character only",
        },
    ],
    Branch: [
        {
            "error name": "required",
            regex: /\S/,
            message: "Branch is required",
        },
        {
            "error name": "Only character",
            regex: /^([a-zA-Z]+\s)*[a-zA-Z]+$/,
            message: "Branch should contain character only",
        },
    ],
    "Date of Admission": [
        {
            "error name": "required",
            regex: /\S/,
            message: "Date of admission is required",
        },
        {
            "error name": "Valid date",
            regex: /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{4}$/,
            message: "Date formate is dd/mm/yyy",
        },
    ],
    "Admission Session": [
        {
            "error name": "required",
            regex: /\S/,
            message: "Admission session is required",
        },
    ],
    "Admission Semester": [
        {
            "error name": "required",
            regex: /\S/,
            message: "Admission semester is required",
        },
        {
            "error name": "Digit only",
            regex: /^(1|[1-9][0-9]*)$/,
            message: "Semester contain digits only",
        },
    ],
    College: [
        {
            "error name": "required",
            regex: /\S/,
            message: "College name is required",
        },
    ],
    Semester: [
        {
            "error name": "required",
            regex: /\S/,
            message: "Semester is required",
        },
        {
            "error name": "Digit only",
            regex: /^(1|[1-9][0-9]*)$/,
            message: "Semester contain digits only",
        },
    ],
    "Mobile No.": [
        {
            "error name": "required",
            regex: /\S/,
            message: "Mobile number is required",
        },
        {
            "error name": "Mobile No.",
            regex: /^(\+\d{1,3}[- ]?)?\d{10}$/,
            message: "Enter valid mibile number",
        },
    ],
    "Email ID": [
        { "error name": "required", regex: /\S/, message: "Email is required" },
        {
            "error name": "Email ID",
            regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: "Enter valid email id",
        },
    ],
    Address: [
        {
            "error name": "required",
            regex: /\S/,
            message: "Address is required",
        },
    ],
    Pincode: [
        {
            "error name": "required",
            regex: /\S/,
            message: "Pincode is required",
        },
        {
            "error name": "Pincode",
            regex: /^(\+\d{1,3}[- ]?)?\d{6}$/,
            message: "Enter valid PIN Code",
        },
    ],
    "Addhar No.": [
        {
            "error name": "required",
            regex: /\S/,
            message: "Addhar number is required",
        },
        {
            "error name": "Addhar No.",
            regex: /^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/,
            message:
                "Enter valid aadhar number in this formate of 1111 2222 3333",
        },
    ],
    "Home Mobile No.": [
        {
            "error name": "required",
            regex: /\S/,
            message: "Home mobile number is required",
        },
        {
            "error name": "Mobile No.",
            regex: /^(\+\d{1,3}[- ]?)?\d{10}$/,
            message: "Enter valid mibile number",
        },
    ],
};
