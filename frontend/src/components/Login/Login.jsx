import "./login.css";
import logo from "../../../public/Logo.png";
import { useState } from "react";

const Login = () => {
  const [data,setData] = useState({email : "" , password : "" });
  const handleLoginSubmit =(e)=>{
    e.preventDefault();
    console.log(data);
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
