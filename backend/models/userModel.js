const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter a username"],
    },
    email : {
      type: String,
      required: [true, "Please enter an email"],
    },
    password : {
      type: String,
      min: 8,
      required: [true, "Please enter a password"],
      select: false,
    },

    phoneNumber : {
      type: String,
      min: 11,
      max: 14,
      required: [true, "Please enter a phone number"],
    },
    role : {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    courseEnrolled : [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.methods.isPasswordMatch = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.tokenGenerate = async function () {
  const token = await jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "90d",
  });
  return token;
};

module.exports = new mongoose.model("User", userSchema);
