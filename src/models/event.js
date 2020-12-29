const { Schema, model } = require("mongoose");

const eventSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true, enum: ["info", "warn", "error"] },
    project: { type: Schema.Types.ObjectId, ref: "Project" },
  },
  { timestamps: true }
);

module.exports = model("Event", eventSchema);
