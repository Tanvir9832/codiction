import "./CourseScrollFirst.css";
import Carousel from "react-multi-carousel";
import { responsive } from "../../style";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allActiveCourseGet } from "../../Reducers/getActiveCourseSlice";
import {Link} from "react-router-dom";

const CourseScrollFirst = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allActiveCourseGet());
  }, [dispatch]);

  const { isError, isLoading, error, data } = useSelector(
    (state) => state.getActiveCourses
  );
  const courses = data && data?.data;

  if(isError){
    return(
      <h1>{error}</h1>
    )
  }


  return (
    <>
      {isLoading ? null : courses && courses.length === 0 ? null : (
        <Carousel
          responsive={responsive}
          showDots={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
        >
          {courses && courses.map((course) => (
            <div style={{display : "flex" ,flexDirection : "column" , margin : "50px"}}  key={course?._id}>
              <img className="course_img" src={course?.courseImage?.url} alt="img" />
              <h3 className="course_name">Course : {course?.courseName}</h3>
              <p className="course_price">{`price : ${course?.coursePrice > 0  ? course?.coursePrice +" ৳" : "free"  }`}</p>
            <Link to={`/single/course/${course?._id}`} className="course_btn">COURSE DETAILS</Link>
            </div>
          ))}
        </Carousel>
      )}
    </>
  );
};

export default CourseScrollFirst;



                
