const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  product_rating: {
    type: Number,
    required: true,
  },
  status: {
    type: Number,
    enum: [1, 0],
    default: 1,
  },
  date_created: {
    type: Date,
    default: Date.now,
  },
  // image: {
  //   type: Buffer,
  // },
  date_closed: Date,
});

module.exports = mongoose.model("Complaint", complaintSchema);
