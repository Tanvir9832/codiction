import "./login.css";
import logo from "../../../public/Logo.png";

const Login = () => {
  return (
    <div className="login">
      <form className="login_form">
        <img className="form_img" src={logo} />
        <h2 className="form_h2">LOG IN</h2>
        <input type="email" placeholder="Email..." required />
        <input type="password" placeholder="Password..." required />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
