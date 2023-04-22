const express = require("express");
const courseRouter = express.Router();

const {
  createCourse,
  getAllCourse,
  getActiveCourse,
  getInactiveCourse,
  updateCourse,
  courseDelete,
} = require("../controllers/course");
const authentication = require("../middleware/authentication");
const adminCheckAuth = require("../middleware/adminCheck");

courseRouter.post( "/course/create", authentication, adminCheckAuth, createCourse ); //!++

courseRouter.get( "/course/getAllCourses",getAllCourse );
courseRouter.get( "/course/getActiveCourses", getActiveCourse );
courseRouter.get("/course/getInactiveCourse", getInactiveCourse );

courseRouter.put( "/course/update/:courseId", authentication, adminCheckAuth, updateCourse);
courseRouter.post( "/course/delete/:courseId", authentication, adminCheckAuth, courseDelete );

module.exports = courseRouter;
