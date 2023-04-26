import Navbar from "../../../pages/navbar/Navbar";
import "./CreatePost.css";

const CreatePost = () => {
  return (
    <div>
      <Navbar />
      <form className="createPost">
        <h1 className="createPost_heading">UPLOAD NEW COURSE</h1>
        <input type="file" accept="image/*" name="file" id="file" required />
        <input
          className="createPost_input"
          type="text"
          placeholder="Name Of course..."
          name="courseName"
          id="courseName"
          required
        />
        <input
          className="createPost_input"
          type="text"
          placeholder="Description of course..."
          name="courseDes"
          id="courseDes"
          required
        />
        <input
          className="createPost_input"
          type="number"
          placeholder="Price..."
          name="price"
          id="price"
          required
        />
        <input
          className="createPost_input"
          type="number"
          placeholder="Number of class..."
          name="numberOfClass"
          id="numberOfClass"
          required
        />
        <input
          className="createPost_input"
          type="number"
          placeholder="Number of lecture sheet..."
          name="lectureSheet"
          id="lectureSheet"
          required
        />
        <input
          className="createPost_input"
          type="number"
          placeholder="Number of practice problem..."
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
              required
            />
            <label > Active </label> 
            {/* for="active" */}
          </div>
          <div>
            <input
              type="radio"
              name="courseStatus"
              id="inactive"
              value="inactive"
              checked
              required
            />
            <label  > Inactive</label>
            {/* for="inactive" */}
          </div>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default CreatePost;
