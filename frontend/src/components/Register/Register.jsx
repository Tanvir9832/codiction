import "./register.css";
import logo from "../../../assets/Logo.png";
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { userResister } from "../../Reducers/userSlice";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [data,setData] = useState({username : "" , email : "" , password : "" ,phoneNumber : ""});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isError } = useSelector(state=>state.users);

  const handleRegisterSubmit =async(e)=>{
    e.preventDefault();
    dispatch(userResister(data));
    setData({username : "" , email : "" , password : "" ,phoneNumber : ""});
    if(!isError){
      navigate("/login");
    }

  }

  return (
    <div className="register">
      <form onSubmit={handleRegisterSubmit} className="register_form">
        <img className="form_img" src={logo} />
        <h2 className="form_h2">REGISTER</h2>
        <input value={data.username} name="username" onChange={(e)=>setData({...data , [e.target.name] : e.target.value})} type="text" placeholder="Name..." required />
        <input value={data.phoneNumber} name="phoneNumber" onChange={(e)=>setData({...data , [e.target.name] : e.target.value})} type="tel" pattern="[0-9]{11}" placeholder="01576602113" required />
        <input value={data.email} name="email" onChange={(e)=>setData({...data , [e.target.name] : e.target.value})} type="email" placeholder="Email..." required />
        <input value={data.password} name="password" onChange={(e)=>setData({...data , [e.target.name] : e.target.value})} type="password" placeholder="Password..." required />
        <input type="submit" />
        <Link className="register_link" to="/login" >Go to login page</Link>
      </form>
    </div>
  )
}

export default Register