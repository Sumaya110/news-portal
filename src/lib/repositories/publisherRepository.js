import Publisher from "../models/PublisherModel";

const create = async (content) => {
  const publisher = await Publisher.create(content);
  return publisher;
};

const find = async (payload) => {
  const publisher = await Publisher.find(payload);
  return publisher;
};

const PublisherRepository = {
  create,
  find,
};

export default PublisherRepository;
