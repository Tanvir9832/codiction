const mongoose = require("mongoose");

const courseModel = new mongoose.Schema(
  {
    courseName : {
      type: String,
      required: [true, "Enter a course name"],
    },
    courseCode : {
      type: String,
      required: [true, "Enter a course code"],
    },
    courseDescription : {
      type: String,
      required: [true, "Enter a course description"],
    },
    courseImage : {
      public_id: String,
      url: String,
    },
    coursePrice : {
      type: Number,
      default: 0,
    },
    numberOfClass : {
      type: Number,
      default: 0,
    },
    lectureSheet : {
       type : Number,
       default: 0,
    },
    numberOfPracticeProblem : {
      type : Number,
      default: 0,
    },
    courseStatus : {
      type: String,
      enum: ["active", "inactive"],
      default: "inactive",
    },
    userEnrolled : [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", courseModel);
