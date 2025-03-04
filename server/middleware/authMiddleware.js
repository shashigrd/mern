const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;
  try {
    const isValid = await jwt.verify(authorization, process.env.SECRET_KEY);
    req.email = isValid.email;
    next();
  } catch (err) {
    return res.status(401).json({ msg: "Unauthorized" });
  }
};

module.exports = authMiddleware;
