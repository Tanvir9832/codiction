import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import "react-multi-carousel/lib/styles.css";
import "./App.css";
import Register from "./components/Register/Register";
import Course from "./components/Courses/Course";
import AdminPage from "./AdminDeshBoard/components/AdminPage/AdminPage";
import CreatePost from "./AdminDeshBoard/pages/CreatePost/CreatePost";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userOnload } from "./Reducers/userSlice";
import SingleCourse from "./components/singleCourse/SingleCourse";
import PageNotFoundPage from "./pages/PageNotFoundPage/PageNotFoundPage";




function App() {
  const dispatch = useDispatch();
  const {isAdmin , isLogin } = useSelector(state=>state.users);
  useEffect(()=>{
    if(localStorage.getItem("codictionToken")){
      dispatch(userOnload());
    }
  },[]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={isLogin ? <PageNotFoundPage /> :<Login />} />
        <Route path="/register" element={isLogin ? <PageNotFoundPage /> : <Register />} />
        <Route path="/course" element={<Course />} /> 
        <Route path="/dashboard" element={isAdmin ? <AdminPage /> :  <PageNotFoundPage />}/>
        <Route path="/create-post" element={isAdmin ?  <CreatePost /> : <PageNotFoundPage /> }/>
        <Route path="/single/course/:id" element={<SingleCourse />} />
        <Route path="*" element={<PageNotFoundPage />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
