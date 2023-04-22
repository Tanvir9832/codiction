const express = require("express");
const { register, login, courseRegistration } = require("../controllers/user");
const authentication = require("../middleware/authentication");

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/course/registration/:courseId", authentication,courseRegistration);

module.exports = userRouter;
