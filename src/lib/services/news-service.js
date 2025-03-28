import News from "../models/newsModel";
import NewsRepository from "../repositories/newsRepository";
import userRepository from "../repositories/userRepository";

export const createNews = async (req, res) => {
  try {
    const response = await NewsRepository.create(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};



export const getNews = async (req, res) => {
  try {
    const {query} = req;
    const user = await userRepository.findOne(query);
    console.log(user?.bookmarks);

    const publisherIds= user?.bookmarks.map(publisher=> publisher._id);
    console.log(publisherIds);

    const articles = await News.find({
      publisherId: { $in: publisherIds },
    }).sort({ publishDate: -1 });

    return res.status(200).json(articles);
  } catch (error) {
    return res.status(500).json(error.message);
  }
}