import "./register.css";
import logo from "../../../public/Logo.png";
const Register = () => {
  return (
    <div className="register">
      <form className="register_form">
        <img className="form_img" src={logo} />
        <h2 className="form_h2">REGISTER</h2>
        <input type="text" placeholder="Name..." required />
        <input type="tel" pattern="[0-9]{11}" placeholder="01576602113" required />
        <input type="email" placeholder="Email..." required />
        <input type="password" placeholder="Password..." required />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Register