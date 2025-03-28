import Users from "../models/userModel";

const create = async (content) => {
  const user = await Users.create(content);
  return user;
};

const findOne = async (query) => {
  const user = await Users.findOne(query);
  return user;
};

const findOneAndUpdate = async ({ query, payload }) => {
  const response = await Users.findOneAndUpdate(query, payload, { new: true });
  return response;
};

const userRepository = {
  create,
  findOneAndUpdate,
  findOne,
};

export default userRepository;
