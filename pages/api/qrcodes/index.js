import QRCode from "@/db/models/QRCode";

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      const props = Object.keys(QRCode.schema.paths);
      console.log(props);

      res.status(200).send("qrcodes");
      break;
    default:
      res.status(201).send();
  }
}
