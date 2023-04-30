import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";
import Register from "./components/Register/Register";
import Course from "./components/Courses/Course";
import AdminPage from "./AdminDeshBoard/components/AdminPage/AdminPage";
import CreatePost from "./AdminDeshBoard/pages/CreatePost/CreatePost";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/course" element={<Course />} /> 
        <Route path="/dashboard" element={<AdminPage />}/>
        <Route path="/create-post" element={<CreatePost />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
