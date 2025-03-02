const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  console.log("auth middle ware req", req.headers);
  const { authorization } = req.headers;
  try {
    const isValid = await jwt.verify(authorization, process.env.SECRET_KEY);
    console.log("is valid token", isValid);
    req.email = isValid.email;
    next();
  } catch (err) {
    return res.status(401).json({ msg: "Unauthorized" });
  }
};

module.exports = authMiddleware;
