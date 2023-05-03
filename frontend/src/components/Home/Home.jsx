import CourseScrollFirst from "../../pages/CourseScrollFirst/CourseScrollFirst";
import Footer from "../../pages/Footer/Footer";
import HomeMid from "../../pages/HomeMid/HomeMid";
import Slider from "../../pages/Slider/Slider";
import Navbar from "../../pages/navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">

        <Navbar />
        <Slider />
        <div style={{ color: "white"  , textAlign : "center",fontWeight :"bolder" ,marginTop : "150px" ,letterSpacing : "2px" }}>OUR COURSES</div>
        <CourseScrollFirst />
        <HomeMid/>
        <Footer />
    </div>
  );
};

export default Home;
