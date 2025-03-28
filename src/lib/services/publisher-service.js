import PublisherRepository from "../repositories/publisherRepository";

export const createPublisher = async (req, res) => {
  try {
    const response = await PublisherRepository.create(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const getPublishers = async (req, res) => {
  try {
    const { name, tag, type } = req?.query;
    let response;
    if (type == "1") {
      response = await PublisherRepository.find();
    } else {
      let conditions = [];

      if (name) {
        const nameCondition = { name: { $regex: name, $options: "i" } };
        conditions.push(nameCondition);
      }
      if (tag) {
        const tagsCondition = {
          tags: { $elemMatch: { $regex: tag, $options: "i" } },
        };
        conditions.push(tagsCondition);
      }
      response = await PublisherRepository.find({
        $or: conditions,
      });
      response = response.sort((a, b) => a.name.localeCompare(b.name)); // asc
    }

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
