import { useState } from "react";
import Navbar from "../../../pages/navbar/Navbar";
import "./CreatePost.css";
import { useDispatch } from "react-redux";
import { coursePost } from "../../../Reducers/courseSlice";

const CreatePost = () => {
  const [data, setData] = useState({
    courseDescription: "",
    courseName: "",
    coursePrice: "",
    numberOfClass: "",
    lectureSheet: "",
    courseStatus : ""
  });

  const handleImage = (e) => {
    if (e.target.files[0]) {
      const Reader = new FileReader();

      Reader.readAsDataURL(e.target.files[0]);
      Reader.onload = () => {
        if (Reader.readyState === 2) {
          setData({ ...data, courseImage: Reader.result });
        }
      };
    }
  };

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(coursePost(data));
  };
  return (
    <div>
      <Navbar />
      <form onSubmit={submitHandler} className="createPost">
        <h1 className="createPost_heading">UPLOAD NEW COURSE</h1>
        {
          data.courseImage && (
            <img style={{width : "150px" ,height : "150px"}} src={data.courseImage} />
          )
        }
        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
          name="file"
          id="file"
          required
        />
        <input
          className="createPost_input"
          type="text"
          placeholder="Name Of course..."
          name="courseName"
          value={data.courseName}
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
          id="courseName"
          required
        />
        <input
          className="createPost_input"
          type="text"
          placeholder="Description of course..."
          name="courseDescription"
          value={data.courseDescription}
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
          id="courseDescription"
          required
        />
        <input
          className="createPost_input"
          type="number"
          placeholder="Price..."
          value={data.coursePrice}
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
          name="coursePrice"
          id="price"
          required
        />
        <input
          className="createPost_input"
          type="number"
          placeholder="Number of class..."
          value={data.numberOfClass}
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
          name="numberOfClass"
          id="numberOfClass"
          required
        />
        <input
          className="createPost_input"
          type="number"
          placeholder="Number of lecture sheet..."
          value={data.lectureSheet}
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
          name="lectureSheet"
          id="lectureSheet"
          required
        />
        <input
          className="createPost_input"
          type="number"
          placeholder="Number of practice problem..."
          value={data.numberOfPracticeProblem}
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
          name="numberOfPracticeProblem"
          id="numberOfPracticeProblem"
          required
        />
        <div className="courseStatus">
          <input
            type="radio"
            name="courseStatus"
            id="active"
            value="active"
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
          />
          <label for="active" > Active </label>
         

          <input
            type="radio"
            name="courseStatus"
            id="inactive"
            value="inactive"
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }

          />
          <label for="inactive"> Inactive</label>
          
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default CreatePost;
