import dbConnect from "@/db/dbConnect";
import ShortLink from "@/db/models/ShortLink";
import mongoose from "mongoose";

export default async function handler(req, res) {
  await dbConnect();
  console.log(ShortLink);

  switch (req.method) {
    case "POST":
      const newShortLink = await ShortLink.create(req.body); // mongoose는 우리가 만든 schema에 맞지 않는 값은 자동으로 무시
      res.status(201).send(newShortLink);
      break;
    case "GET":
      const shortLinks = await ShortLink.find();
      res.status(200).send(shortLinks);
      break;
  }
}
