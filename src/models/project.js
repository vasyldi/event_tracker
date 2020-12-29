const { Schema, model } = require("mongoose");

const projectSchema = new Schema(
  {
    title: { type: String, required: true },
    apiKey: { type: String, required: true },
    type: { type: String, required: true, enum: ["web"] },
    owner: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    events: [{ type: Schema.Types.ObjectId, ref: "Event" }],
  },
  { timestamps: true }
);

module.exports = model("Project", projectSchema);
