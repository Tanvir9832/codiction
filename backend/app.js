//! packages import
const express = require("express");
const cors = require("cors");

const app = express();

//! Router import

const userRouter = require("./routers/user");
const courseRouter = require("./routers/course");
const adminRouter = require("./routers/admin");

//! donenv configuration

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "./config/.env" });
}

//! using builtin middleware

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//!using routers

app.use("/api/v1", userRouter);
app.use("/api/v2", courseRouter);
app.use("/api/v3", adminRouter);

app.get("/", (req, res) => {
  res.send("HELLO");
});

//! app Listen Functions

async function appListen() {
  try {
    await app.listen(process.env.PORT || 8080);
    console.log("server connected");
  } catch (error) {
    console.log(error);
  }
}

module.exports = appListen;
