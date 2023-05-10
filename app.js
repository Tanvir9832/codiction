//! packages import
const express = require("express");
const cors = require("cors");
const cloudinary = require("cloudinary");
const path = require("path");
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
app.use(express.json({ limit : "50mb"}));
app.use(express.urlencoded({ extended: false }));

//!using routers

app.use("/api/v1", userRouter);
app.use("/api/v2", courseRouter);
app.use("/api/v3", adminRouter);

app.get("/", (req, res) => {
  res.send("HELLO");
});


//! cloudinary configuration


cloudinary.config({
    cloud_name : process.env.CLOUD_NAME,
    api_key : process.env.API_KEY,
    api_secret : process.env.API_SECRET
})


app.use(express.static(path.join(__dirname, "./frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./frontend/dist/index.html")),
    function (err) {
      res.status(500).send(err);
    };
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
