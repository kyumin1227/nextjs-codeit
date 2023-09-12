import mongoose from "mongoose";

const shortLinkSchema = new mongoose.Schema(
  {
    title: { type: String, default: "" },
    url: { type: String, default: "" },
    shortLink: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

const shortLink =
  mongoose.models["ShortLink"] || // mongoose의 models에 있는지 우선 확인
  mongoose.model("ShortLink", shortLinkSchema); // 없다면 새롭게 생성

export default shortLink;
