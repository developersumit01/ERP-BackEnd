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
    },
  },
});

export default AddressSchema;
