
import { useDispatch, useSelector} from "react-redux";
import "./SingleCourseFirst.css"
import { useEffect, useState } from "react";
import { courseEnroll } from "../../Reducers/courseSlice";
import { useNavigate } from "react-router-dom";



const SingleCourseFirst = ({id}) => {

const [isEnrolled , setIsEnrolled] = useState(false);


const { data , isLoading ,isError , error  } = useSelector(state=>state.getAllCourses);
const myData = useSelector(state=>state.users);




//?Declaring Variables
const courseImage = data?.course?.courseImage?.url;
const coursePrice = data?.course?.coursePrice;
const lectureSheet = data?.course?.lectureSheet;
const numberOfClass = data?.course?.numberOfClass;
const numberOfPracticeProblem =data?.course?.numberOfPracticeProblem;
const userEnrolled = data?.course?.userEnrolled;


const dispatch = useDispatch();
const navigate = useNavigate();

// const isOk = useSelector(state=>state.course.isError);


const handleEnrolledFunction =async()=>{
  const ans = await dispatch(courseEnroll(id));

    if(ans?.payload?.success){
      setIsEnrolled(true);
    }else{
      navigate('/login');
    }


}



useEffect(()=>{
  userEnrolled && userEnrolled.forEach((id)=>{
    
    if(id===myData?.data?.user?._id){
      setIsEnrolled(true);
    }
  })
},[userEnrolled , myData?.data?.user?._id , id])


if(isLoading){
  return(
    <>LOADING...</>
  )
}

if(isError){
  return(
    <>{error}</>
  )
}
  return (
    <div className="singleCourseFirst">

        <img className="singlCourse_img" src={courseImage} alt="loading..." />

        <h3>
            {
                `${coursePrice > 0 ? "Course price : " + coursePrice + " ৳ " : "FREE COURSE" }`
            }
        </h3>
        <div>
        <button disabled={isEnrolled} onClick={handleEnrolledFunction} style={isEnrolled ? {background : 'green' ,color : 'black'} : null} className="singlecourse_btn">{
          isEnrolled ? "Enrolled" : "Enroll now"
        } </button>
        </div>
        <div>
            <h3>
                {`Number of classes : ${numberOfClass}`}
            </h3>
        </div>
        <div>
            <h3>
                {`Number of practice problems : ${numberOfPracticeProblem}`}
            </h3>
        </div>
        <div>
            <h3>
                {`Number of lecture sheet : ${lectureSheet}`}
            </h3>
        </div>

    </div>
  )
}

export default SingleCourseFirst