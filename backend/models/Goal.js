const mongoose = require("mongoose");

const GoalSchema = mongoose.Schema(
  {
    text: { type: String, required: [true, "Please add a text value"] },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User", // Reference to the name of user Schema
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Goal", GoalSchema);
