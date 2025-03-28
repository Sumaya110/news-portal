import userRepository from "../repositories/userRepository";
const validator = require("validator");

export const createUser = async (req, res) => {
  try {
    const { email } = req.body;

    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: "Email not valid" });
    }
    const response = await userRepository.create(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    const { query, body } = req;
    const  payload={$addToSet: body};
    const response = await userRepository.findOneAndUpdate({ query, payload });
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};


