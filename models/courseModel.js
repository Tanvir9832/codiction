const mongoose = require("mongoose");

const courseModel = new mongoose.Schema(
  {
    courseName : {
      type: String,
      required: [true, "Enter a course name"],
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
      required : true,
    },
    numberOfClass : {
      type: Number,
      default: 0,
      required : true,
    },
    lectureSheet : {
       type : Number,
       default: 0,
       required : true,
    },
    numberOfPracticeProblem : {
      type : Number,
      default: 0,
      required : true,
    },
    courseStatus : {
      type: String,
      enum: ["active", "inactive"],
      default: "inactive",
      required : true,
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
