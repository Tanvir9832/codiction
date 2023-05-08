const jwt = require("jsonwebtoken");
const USER = require("../models/userModel");

const authentication = async (req, res, next) => {
  try {
    const authenticationInfo = req.headers.authorization;
    const token = authenticationInfo.split(" ")[1];

    if (!token)
      return res
        .status(400)
        .json({ success: false, message: "Authentication failed" });

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const user = await USER.findOne({ _id: decodedToken.id });

    req.id = user._id;
    req.role = user.role;

    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Please Login First",
    });
  }
};

module.exports = authentication;
