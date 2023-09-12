import dbConnect from "@/db/dbConnect";
import shortLink from "@/db/models/ShortLink";
import mongoose from "mongoose";

export default async function handler(req, res) {
  await dbConnect();
  console.log(shortLink);

  switch (req.method) {
    case "GET":
      res.status(201).send({
        title: "nextJs",
        url: "fasd",
      });
      break;
  }
}
