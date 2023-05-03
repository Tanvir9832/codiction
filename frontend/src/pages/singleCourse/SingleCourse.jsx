import { useEffect } from "react";
import {useParams} from "react-router-dom"
import {useDispatch , useSelector} from "react-redux";
import { getSingleCourse } from "../../Reducers/getCourseSlice";


const SingleCourse = () => {
    const { id } = useParams();
    const dispatch = useDispatch();


    const { data , isLoading ,isError , error    } = useSelector(state=>state.getAllCourses);
  console.log(data);



  //?Declaring Variables
    const courseImage = data?.course?.courseImage?.url;
    const courseDescription = data?.course?.courseDescription;
    const courseName = data?.course?.courseName;
    const coursePrice = data?.course?.coursePrice;
    const lectureSheet = data?.course?.lectureSheet;
    const numberOfClass = data?.course?.numberOfClass;
    const numberOfPracticeProblem =data?.course?.numberOfPracticeProblem;


  console.log(courseImage)



    useEffect(()=>{
        dispatch(getSingleCourse(id));
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
    <div>
        
    </div>
  )
}

export default SingleCourse