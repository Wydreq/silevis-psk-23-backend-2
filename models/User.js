const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please insert first name"],
  },
  lastName: {
    type: String,
    required: [true, "Please insert last name"],
  },
  email: {
    type: String,
    required: [true, "Please insert email"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  practiceMonth: {
    type: String,
    required: [true, "Please insert practice month"],
  },
  practiseDateRange: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: [true, "Please insert company name"],
  },
  address: {
    type: String,
    required: [true, "Please insert address"],
  },
  phone: {
    type: String,
    required: [true, "Please insert phone number"],
  },
  passed: {
    type: Boolean,
    default: false,
  },
  requestNewDateRange: {
    type: String,
  },
  acceptedRequest: {
    type: String,
    enum: ["rejected", "accepted", "pending"],
    default: "pending",
  },
});

module.exports = mongoose.model("User", UserSchema);
