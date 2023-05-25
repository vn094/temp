import userModel from "../model/user.model.js";

export const addUser = async (req, res) => {
  const { username, email, password } = req.body;
  await userModel.create({ username, password });
  return res.status(200).json({ message: "User account created" });
};
