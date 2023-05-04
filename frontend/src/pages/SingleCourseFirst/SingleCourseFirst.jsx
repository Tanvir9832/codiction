
import { useSelector} from "react-redux";
import "./SingleCourseFirst.css"
import { useEffect, useState } from "react";



const SingleCourseFirst = () => {

const [isEnrolled , setIsEnrolled] = useState(false);


const { data , isLoading ,isError , error , userEnrolled   } = useSelector(state=>state.getAllCourses);
const myData = useSelector(state=>state.users);
console.log(data);



//?Declaring Variables
const courseImage = data?.course?.courseImage?.url;
const coursePrice = data?.course?.coursePrice;
const lectureSheet = data?.course?.lectureSheet;
const numberOfClass = data?.course?.numberOfClass;
const numberOfPracticeProblem =data?.course?.numberOfPracticeProblem;



const handleEnrolledFunction =()=>{
  console.log("first")
  setIsEnrolled(true);
}


useEffect(()=>{
  userEnrolled && userEnrolled.forEach((id)=>{
    
    if(id===myData?.data?.user?._id){
      setIsEnrolled(true);
    }
  })
},[])



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
        <button disabled={isEnrolled} onClick={handleEnrolledFunction} className="singlecourse_btn">{
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