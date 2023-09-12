import dbConnect from "@/db/dbConnect";
import ShortLink from "@/db/models/ShortLink";

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;
  switch (req.method) {
    case "GET":
      const shortLink = await ShortLink.findById(id);
      res.status(200).send(shortLink);
      break;
  }
}
