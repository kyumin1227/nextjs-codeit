import dbConnect from "@/db/dbConnect";
import ShortLink from "@/db/models/ShortLink";

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;
  switch (req.method) {
    case "PATCH":
      // findByIdAndUpdate의 세번째 param은 option(new는 반환값을 변경된 값으로 설정)
      const updatedShortLink = await ShortLink.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.send(updatedShortLink);
      break;
    case "GET":
      const shortLink = await ShortLink.findById(id);
      res.status(200).send(shortLink);
      break;
    case "DELETE":
      await ShortLink.findByIdAndDelete(id);
      res.status(204).send("Delete");
      break;
  }
}
