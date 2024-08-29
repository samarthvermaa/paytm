import mongoose, { model, Schema } from "mongoose";

const accountsSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    balance: { type: Number, required: true },
  },
  { timestamps: true }
);

export const accountsModel = model("Account", accountsSchema);
