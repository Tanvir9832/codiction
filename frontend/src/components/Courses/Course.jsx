import "./Course.css";
import Navbar from "../../pages/navbar/Navbar"
import CourseFirst from "../../pages/courseFirst/CourseFirst";
import CourseScrollFirst from "../../pages/CourseScrollFirst/CourseScrollFirst";
import CourseScrollSecond from "../../pages/CourseScrollSecond/CourseScrollSecond";
import Footer from "../../pages/Footer/Footer"

const Course = () => {
  return (
    <div className="course">
      <Navbar />
      <CourseFirst />
      <div style={{ color: "white"  , textAlign : "center",fontWeight :"bolder" ,marginTop : "150px" ,letterSpacing : "2px" }}>RUNNING   COURSES</div>
      <CourseScrollFirst />
      <div style={{ color: "white"  , textAlign : "center",fontWeight :"bolder" ,marginTop : "150px" ,letterSpacing : "2px" }}>UPCOMMING   COURSES</div>
      <CourseScrollSecond />
      <Footer />
    </div>
  )
}

export default Course