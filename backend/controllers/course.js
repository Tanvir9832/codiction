const COURSE = require("../models/courseModel");

//! course post
const createCourse = async (req, res) => {
  try {
    const {
      courseName,
      courseCode,
      courseDescription,
      coursePrice,
      courseStatus,
      courseImage,
    } = req.body;

    let image = {
      public_id: "public_id",
      url: "secure_url",
    };

    let postCourse = {
      courseName,
      courseCode,
      courseDescription,
      coursePrice,
      courseStatus,
      courseImage: image,
    };

    const course = new COURSE(postCourse);
    await course.save();
    return res.status(200).json({
      message: "Course created successfully",
      data: course,
    });
  } catch (error) {
    res.status(500).json({
      message: "Course post creation failed",
    });
  }
};

//! course get start

//! get all course
const getAllCourse = async (req, res) => {
  try {
    const course = await COURSE.find({});
    return res.status(200).json({
      success: true,
      message: "Course get successfully",
      data: course,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Course get failed",
    });
  }
};

//! get active course

const getActiveCourse = async (req, res) => {
  try {
    const course = await COURSE.find({
      courseStatus: "active",
    });
    return res.status(200).json({
      success: true,
      message: "Active courses get successfully",
      data: course,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Active Course get failed",
    });
  }
};

//! get inactive course

const getInactiveCourse = async (req, res) => {
  try {
    const course = await COURSE.find({
      courseStatus: "inactive",
    });
    return res.status(200).json({
      success: true,
      message: "Inactive courses get successfully",
      data: course,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Inactive Course get failed",
    });
  }
};

//! course update

const updateCourse = async (req, res) => {
  try {
    const {
      courseName,
      courseCode,
      courseDescription,
      coursePrice,
      courseStatus,
      courseImage,
    } = req.body;

    const courseId = req.params.courseId;
    const course = await COURSE.findById(courseId);

    if (!course) {
      return res
        .status(404)
        .json({ success: false, message: "Course not found" });
    }

    if (courseStatus) {
      course.courseStatus = courseStatus;
    }
    if (courseName) {
      course.courseName = courseName;
    }
    if (courseCode) {
      course.courseCode = courseCode;
    }
    if (courseDescription) {
      course.courseDescription = courseDescription;
    }
    if (coursePrice) {
      course.coursePrice = coursePrice;
    }

    await course.save();

    res
      .status(200)
      .json({ success: true, message: "Course updated successfully" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Course update failed",
    });
  }
};

//! course delete

const courseDelete = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const course = await COURSE.findById(courseId);
    if (!course) {
      return res
        .status(404)
        .json({ success: false, message: "Course not found" });
    }

    await course.remove();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Course delete failed",
    });
  }
};

module.exports = createCourse;
