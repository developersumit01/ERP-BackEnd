import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({
  address: {
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
      name: {
        type: String,
        required: true,
        default: "Address",
      },
    },
  },
  city: {
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
      name: {
        type: String,
        required: true,
        default: "City",
      },
    },
  },
  state: {
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
      name: {
        type: String,
        required: true,
        default: "State",
      },
    },
  },
  country: {
    type: {
      data: {
        type: String,
        required: true,
        default: "India",
      },
      editable: {
        type: Boolean,
        required: true,
        default: true,
      },
      name: {
        type: String,
        required: true,
        default: "Country",
      },
    },
  },
  pinCode: {
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
      name: {
        type: String,
        required: true,
        default: "PIN Code",
      },
    },
  },
});

export default AddressSchema;
