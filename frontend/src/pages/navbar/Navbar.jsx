import { AppBar } from "@mui/material";
import { Link } from "react-router-dom";

import "./navbar.css";

import logo from "../../../public/Logo.png";

const Navbar = () => {
  return (
    <AppBar
      className="navbar"
      sx={{ maxWidth: "1200px", backgroundColor: "#001a35" }}
      position="sticky"
    >
      
            <div className="navbar_inside">
                <div className="navbar_first">
                      <div>
                            <img className="Navbar_logo" src={logo} />
                      </div>
                      <div className="navbar_first_inside">
                            <Link className="link" to="/">
                              Home
                            </Link>
                            <Link className="link" to="/course">
                              Course
                            </Link>
                      </div>
                </div>


                <div className="navbar_second">
                            <Link className="link" to="/login">
                              Login
                            </Link>
                            <Link className="link" to="/register">
                              Register
                            </Link>
                            <Link className="link" to="/logout">
                              Logout
                            </Link>
                </div>
            </div>
    </AppBar>
  );
};

export default Navbar;
