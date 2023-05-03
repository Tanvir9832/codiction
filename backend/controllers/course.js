const COURSE = require("../models/courseModel");
const USER = require("../models/userModel");
const cloudinary = require("cloudinary");





//! CREATE COURSE
const createCourse = async (req, res) => {
  try {
    const {
      courseName,
      courseDescription,
      coursePrice,
      courseStatus,
      numberOfClass,
      lectureSheet,
      numberOfPracticeProblem,
      courseImage
    } = req.body;

    
    const codictionCloude =await cloudinary.v2.uploader.upload(courseImage , {
      folder : "codictionCoursePictures"
    })



    let image = {
      public_id: codictionCloude.public_id,
      url: codictionCloude.secure_url,
    };

    let postCourse = {
      courseName,
      courseDescription,
      coursePrice,
      numberOfClass,
      courseStatus,
      lectureSheet,
      numberOfPracticeProblem,
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



//! GET ALL COURSE
const getAllCourse = async (req, res) => {
  try {
    const course = await COURSE.find().limit(300).populate('userEnrolled');
    return res.status(200).json({
      success: true,
      message: "Course get successfully",
      data: course,
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Course get failed",
    });
  }
};


//! GET ACTIVE COURSE
const getActiveCourse = async (req, res) => {
  try {
    const course = await COURSE.find({
      courseStatus: "active",
    }).limit(300).populate('userEnrolled')
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


//! GET INACTIVE COURSE
const getInactiveCourse = async (req, res) => {
  try {
    const course = await COURSE.find({
      courseStatus: "inactive",
    }).limit(300).populate('userEnrolled');
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




//! COURSE UPDATE
const updateCourse = async (req, res) => {
  try {
    const {
      courseName,
      courseDescription,
      coursePrice,
      courseStatus,
      numberOfClass,
      lectureSheet,
      numberOfPracticeProblem
    } = req.body;

    const courseId = req.params.courseId;

    const course = await COURSE.findById(courseId);

    if (!course) {
      return res
        .status(404)
        .json({ success: false, message: "Course not found" });
    }

    //! CONDITION FOR WHICH DATA ADMIN WANTS TO UPDATE
    if (courseStatus) {
      course.courseStatus = courseStatus;
    }
    if (courseName) {
      course.courseName = courseName;
    }
    if (courseDescription) {
      course.courseDescription = courseDescription;
    }
    if (coursePrice) {
      course.coursePrice = coursePrice;
    }
    if(numberOfClass){
      course.numberOfClass = numberOfClass;
    }
    if(lectureSheet){
      course.lectureSheet = lectureSheet;
    }
    if(numberOfPracticeProblem){
      course.numberOfPracticeProblem = numberOfPracticeProblem;
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



//! COURSE DELETE
const courseDelete = async (req, res) => {
  try {

    //! DATA FROM USER
    const { email , password } = req.body;


    //! COURSE ID
    const courseId = req.params.courseId;


    //! FIND USER
    const user = await USER.findOne({ email }).select('password');

    //!USER CHECK
    if(!user){
      return res.status(401).json({
        success: false,
        message: "User not found"
      })
    }

    //! PASSWORD MATCH CHECK
    const isPassMatch = await user.isPasswordMatch(password);


    //! IF PASSWORD FALSE
    if (!isPassMatch) {
      return res
      .status(401)
      .json({ success: false, message: "Incorrect password" });
    }

    //! COURSE CHECK
    const course = await COURSE.findById(courseId);

    //! COURSE CHECK
    if (!course) {
      return res
        .status(401)
        .json({ success: false, message: "Course not found" });
    }


    //! DELETE COUSER FROM ALL USERS
    for(let i=0;i<course.userEnrolled.length;i++) {

      const userTookCourse = await USER.findById(course.userEnrolled[i]);

      if(userTookCourse) {

        const index = userTookCourse.courseEnrolled.indexOf(courseId);

        if (index > -1) {
          userTookCourse.courseEnrolled.splice(index, 1);
          await userTookCourse.save();
        }

      }
    }

    await COURSE.findByIdAndDelete(courseId);

    return res.status(200).json({
      success: true,
      message: "Course deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Course delete failed",
    });
  }
};



//!GET ONE COURSE
const getOneCourse = async(req,res)=>{
  try {
    const courseId = req.params.courseId;
    const course = await COURSE.findById(courseId);

    if(!course) {
      return res.status(404).json({success : false, message: "Course not found"});
    }
    return res.status(200).json({
      success: true,
      message: "Course get successfully",
      course
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Course get failed",
    });
  }
}




module.exports = {
  createCourse,
  getAllCourse,
  getActiveCourse,
  getInactiveCourse,
  updateCourse,
  courseDelete,
  getOneCourse
};
