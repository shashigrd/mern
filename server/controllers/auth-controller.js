const User = require("../model/userSchema");
const Contact = require("../model/contactSchema");

const home = async (req, res) => {
  try {
    res.send("home from controller");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      return res.status(400).json({ msg: "user already exist" });
    }

    const userInfo = await User.create({
      username,
      email,
      phone,
      password,
    });
    res
      .status(201)
      .json({ msg: userInfo, token: await userInfo.generateToken() });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userInfo = await User.findOne({ email });
    if (!userInfo) {
      const error = { status: 400, message: "user not exist" };
      // return res.status(400).json({ msg: "user not exist" });
      next(error);
    }
    const isPasswordMatch = userInfo.comparePassword(password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "password not match" });
    }
    res
      .status(200)
      .json({ msg: userInfo, token: await userInfo.generateToken() });
  } catch (error) {
    console.log(error);
  }
};

const contact = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;
    const isNew = await Contact.create({ name, email, message });
    res.status(201).json({ msg: isNew });
  } catch (error) {
    next(error);
  }
};

const user = async (req, res) => {
  const { email } = req;
  const userInfo = await User.findOne({ email });
  if (userInfo) {
    return res.status(200).json({ msg: userInfo });
  } else {
    return res.status(500).json({ msg: "Email does not exists" });
  }
};

module.exports = { home, register, login, contact, user };
