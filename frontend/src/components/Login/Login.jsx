import "./login.css";
import logo from "../../../assets/Logo.png";
import { useState } from "react";
import {useDispatch} from "react-redux";
import { userLogin } from "../../Reducers/userSlice";
import {Link, useNavigate} from "react-router-dom"

const Login = () => {
  const [data,setData] = useState({email : "" , password : "" });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginSubmit =async(e)=>{
    e.preventDefault();
    const fromUserLogin = await dispatch(userLogin(data));
    setData({ email : "" , password : "" });

    if(fromUserLogin?.payload?.success){
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
        <div className="login_links">
          <Link className="link" to="/register" >Create account</Link>
          <Link className="link" to="/forget-password" >Forget password</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
