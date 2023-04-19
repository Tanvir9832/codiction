const express = require("express");
const courseRouter = express.Router();

const createCourse = require("../controllers/course");
const authentication = require("../middleware/authentication");
const adminCheckAuth = require("../middleware/adminCheck");

courseRouter.post(
  "/course/create",
  authentication,
  adminCheckAuth,
  createCourse
);

module.exports = courseRouter;
