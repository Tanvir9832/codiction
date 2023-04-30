import { useState } from "react";
import Navbar from "../../../pages/navbar/Navbar";
import "./CreatePost.css";

const CreatePost = () => {
  const [data, setData] = useState({
    courseDescription: "",
    courseName: "",
    coursePrice: "",
    numberOfClass: "",
    lectureSheet: "",
    courseStatus : ""
  });

  const handleImage =(e)=>{
    if(e.target.files[0]){
      const Reader = new FileReader();

      Reader.readAsDataURL(e.target.files[0]);
      Reader.onload=()=>{
        if(Reader.readyState === 2){
          setData({...data , courseImage : Reader.result });
        }
      }
    }
   
  }
  const submitHandler =(e)=>{
    e.preventDefault();
    console.log(data);
  }
  return (
    <div>
      <Navbar />
      <form onSubmit={submitHandler} className="createPost">
        <h1 className="createPost_heading">UPLOAD NEW COURSE</h1>
        <input type="file" accept="image/*" onChange={handleImage} name="file" id="file" required />
        <input
          className="createPost_input"
          type="text"
          placeholder="Name Of course..."
          name="courseName"
          value={data.courseName}
          onChange={(e)=>setData({...data , [e.target.name] : e.target.value})}
          id="courseName"
          required
        />
        <input
          className="createPost_input"
          type="text"
          placeholder="Description of course..."
          name="courseDescription"
          value={data.courseDescription}
          onChange={(e)=>setData({...data , [e.target.name] :  e.target.value})}
          id="courseDescription"
          required
        />
        <input
          className="createPost_input"
          type="number"
          placeholder="Price..."
          value={data.coursePrice}
          onChange={(e)=>setData({...data , [e.target.name] : e.target.value})}
          name="coursePrice"
          id="price"
          required
        />
        <input
          className="createPost_input"
          type="number"
          placeholder="Number of class..."
          value={data.numberOfClass}
          onChange={(e)=>setData({...data , [e.target.name] :  e.target.value})}
          name="numberOfClass"
          id="numberOfClass"
          required
        />
        <input
          className="createPost_input"
          type="number"
          placeholder="Number of lecture sheet..."
          value={data.lectureSheet}
          onChange={(e)=>setData({...data , [e.target.name] :  e.target.value})}
          name="lectureSheet"
          id="lectureSheet"
          required
        />
        <input
          className="createPost_input"
          type="number"
          placeholder="Number of practice problem..."
          value={data.numberOfPracticeProblem}
          onChange={(e)=>setData({...data , [e.target.name] :  e.target.value})}
          name="numberOfPracticeProblem"
          id="numberOfPracticeProblem"
          required
        />
        <div className="courseStatus">
          <div>
            <input
              type="radio"
              name="courseStatus"
              id="active"
              value="active"
              onChange={(e)=>setData({...data , [e.target.name] :  e.target.value})}
              required
            />
            <label> Active </label>
            {/* for="active" */}
          </div>
          <div>
            <input
              type="radio"
              name="courseStatus"
              id="inactive"
              value="inactive"
              onChange={(e)=>setData({...data , [e.target.name] :  e.target.value})}
              checked
              required
            />
            <label> Inactive</label>
            {/* for="inactive" */}
          </div>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default CreatePost;
