const { Schema, model } = require("mongoose");

const refreshTokenSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, required: true },
    tokens: [
      {
        value: { type: String, required: true },
        signedAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

module.exports = model("RefreshToken", refreshTokenSchema);
