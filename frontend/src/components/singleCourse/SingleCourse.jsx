import {useParams} from "react-router-dom"
import SingleCourseFirst from "../../pages/SingleCourseFirst/SingleCourseFirst";
import SingleCourseSecond from "../../pages/SingleCourseSecond/SingleCourseSecond";
import "../singleCourse/SingleCourse.css";
import Navbar from "../../pages/navbar/Navbar";
import { useEffect } from "react";
import { getSingleCourse } from "../../Reducers/getCourseSlice";
import { useDispatch } from "react-redux";




const SingleCourse = () => {
    const { id } = useParams();
    const dispatch = useDispatch();


    useEffect(()=>{
      dispatch(getSingleCourse(id));
  },[id , dispatch]);


  return (
    <div className="singleCourse">
      <Navbar />
    <div className="singleCourseComponents">
        <SingleCourseFirst id={id} />
        <SingleCourseSecond  />
    </div>
    </div>
  )
}

export default SingleCourse