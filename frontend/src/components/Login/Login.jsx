import "./login.css";
import logo from "../../../public/Logo.png";
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { userLogin } from "../../Reducers/userSlice";
import {useNavigate} from "react-router-dom"

const Login = () => {
  const [data,setData] = useState({email : "" , password : "" });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {isError} = useSelector(state=>state.users)
  const handleLoginSubmit =(e)=>{
    e.preventDefault();
    dispatch(userLogin(data));
    setData({ email : "" , password : "" });
    if(!isError){
      navigate('/');
    }
  }
  return (
    <div className="login">
      <form onSubmit={handleLoginSubmit} className="login_form">
        <img className="form_img" src={logo} />
        <h2 className="form_h2">LOG IN</h2>
        <input value={data.email} name="email" onChange={(e)=>setData({...data, [e.target.name] : e.target.value})} type="email" placeholder="Email..." required />
        <input value={data.password} name="password" onChange={(e)=>setData({...data, [e.target.name ] : e.target.value})} type="password" placeholder="Password..." required />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
