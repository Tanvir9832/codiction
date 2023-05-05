import { useSelector } from "react-redux";
import "./SingleCourseSecond.css";

const SingleCourseSecond = () => {


  const { data , isLoading ,isError , error    } = useSelector(state=>state.getAllCourses);

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



  const courseDescription = data?.course?.courseDescription;
  const courseName = data?.course?.courseName;
  return (
    <div className="singlecoursesecond">
      <div className="courseName_Des">
        <h1 className="courseName">{courseName}</h1>
        <h3 className="courseDesciption">{courseDescription}</h3>
      </div>
    </div>
  );
};

export default SingleCourseSecond;
