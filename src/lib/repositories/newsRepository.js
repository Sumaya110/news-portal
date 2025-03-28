import News from "../models/newsModel";

const create = async(content) => {
    const news = await News.create(content);
    return news;
}

const NewsRepository ={
    create,
}

export default NewsRepository;