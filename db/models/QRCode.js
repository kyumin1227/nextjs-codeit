import mongoose from "mongoose";

const QRCodeSchema = new mongoose.Schema(
  {
    title: { type: String, default: "" },
    url: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

const QRCode =
  mongoose.models["QRCode"] || mongoose.model("QRCode", QRCodeSchema);

export default QRCode;
