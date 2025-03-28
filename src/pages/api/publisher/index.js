import connectMongo from "@/config/ConnectDB/ConnectDB";
import {
  createPublisher,
  getPublishers,
} from "@/lib/services/publisher-service";

export default async function handler(req, res) {
  try {
    await connectMongo();
    switch (req.method) {
      case "POST":
        return await createPublisher(req, res);
      case "GET":
        return await getPublishers(req, res);
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
}
