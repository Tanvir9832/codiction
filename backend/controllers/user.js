const USER = require("../models/userModel");
const COURSE = require("../models/courseModel");




//! register user

const register = async (req, res) => {
  try {
    const { username, password, email, phoneNumber } = req.body;
    // console.log(username, password, email, phoneNumber);
    if (!username || !password || !email) {
      return res
        .status(400)
        .json({ message: "Please Provide All Required Fields" });
    }

    const user = await USER.findOne({ email: email });

    if (user) {
      return res
        .status(409)
        .json({ success: false, message: "User Already Exists" });
    }

    const newUser = new USER({ username, email, password, phoneNumber });

    await newUser.save();

    res
      .status(200)
      .json({ success: true, message: "Registration Successfull" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Registration Failed" });
  }
};




//! login user

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await USER.findOne({ email: email }).select("password role");
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Please Sign In First" });
    }
    const isMatch = await user.isPasswordMatch(password);
    if (!isMatch)
      return res
        .status(400)
        .json({ success: false, message: "Incorrect Password" });

    const token = await user.tokenGenerate();

    res
      .status(200)
      .json({ success: true, message: "Login Successfull",user, token });
  } catch (error) {
    res.status(500).json({ success: false, message: "Login Failed" });
  }
};



//! course registration

const courseRegistration = async (req, res) => {
  try {
    const courseId = req.params.courseId;

    const course = await COURSE.findOne({ _id: courseId });
    const user = await USER.findOne({ _id: req.id });

    if (!course) {
      return res
        .status(400)
        .json({ success: false, message: "Course Not Found" });
    }
    let courseTakenAlready = false;
    for (let i = 0; i < course.userEnrolled.length; i++) {
      if (course.userEnrolled[i].toString() === req.id.toString()) {
        courseTakenAlready = true;
        break;
      }
    }

    if (!courseTakenAlready) {
      course.userEnrolled.push(req.id);
      user.courseEnrolled.push(courseId);
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Course Already Registered" });
    }

    await user.save();
    await course.save();

    res.status(200).json({
      success: true,
      message: "Course Registered Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Course Registration Failed",
    });
  }
};

//! checkout user login and userrole

const chechOut = async (req , res )=>{
  try {

    const user = await USER.findById(req.id);

    res.status(200).json({ success: true, message:"you are logged in", user });

  } catch (error) {
    res.status(500).json({ success: false, message:"you are not logged in"});
  }
}



module.exports = {
  register,
  login,
  courseRegistration,
  chechOut
};
