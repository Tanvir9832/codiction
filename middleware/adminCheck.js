const adminCheckAuth = async (req, res, next) => {
  try {
    if (req.role === "admin") {
      return next();
    }
    return res.status(400).json({
      success: false,
      message: "Only Admin Can Create A Course",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "You Are Not An Admin",
    });
  }
};

module.exports = adminCheckAuth;
