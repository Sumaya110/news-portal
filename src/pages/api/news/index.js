import connectMongo from "@/config/ConnectDB/ConnectDB";
import { createNews, getNews } from "@/lib/services/news-service";

export default async function handler(req, res) {
  try {
    await connectMongo();
    switch (req.method) {
      case "POST":
        return await createNews(req, res);
      case "GET":
          return await getNews(req, res);
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
}
