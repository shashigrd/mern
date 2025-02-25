const mongooes = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongooes.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.methods.generateToken = async function () {
  try {
    const token = await jwt.sign(
      { userId: this._id.toString(), email: this.email, isAdmin: this.isAdmin },
      process.env.SECRET_KEY,
      { expiresIn: "1d" }
    );
    return token;
  } catch (error) {
    console.log(error);
  }
};

userSchema.methods.comparePassword = function (password) {
  try {
    return password === this.password;
  } catch (error) {
    console.log(error);
  }
};

const User = new mongooes.model("users-collection", userSchema);

module.exports = User;
