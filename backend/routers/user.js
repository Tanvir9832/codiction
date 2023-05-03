const express = require("express");
const { register, login, courseRegistration ,chechOut } = require("../controllers/user");
const authentication = require("../middleware/authentication");

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/course/registration/:courseId", authentication,courseRegistration);
userRouter.get("/checkout", authentication , chechOut);

module.exports = userRouter;
