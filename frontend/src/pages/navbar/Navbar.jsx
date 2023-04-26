import { AppBar } from "@mui/material";
import { Link } from "react-router-dom";

import "./navbar.css";

import logo from "../../../public/Logo.png";

const Navbar = () => {
  return (
    <AppBar
      className="navbar"
      sx={{ backgroundColor: "#001a35" }}
      position="sticky"
    >
      
            <div className="navbar_inside">
                <div className="navbar_first">
                      <div>
                            <img className="Navbar_logo" src={logo} />
                      </div>
                      <div className="navbar_first_inside">
                            <Link className="link" to="/">
                              HOME
                            </Link>
                            <Link className="link" to="/course">
                              COURSE
                            </Link>
                            <Link className="link" to="/dashboard">
                              DASHBOARD
                            </Link>
                      </div>
                </div>


                <div className="navbar_second">
                            <Link className="link" to="/login">
                              LOGIN
                            </Link>
                            <Link className="link" to="/register">
                              REGISTER
                            </Link>
                            <Link className="link" to="/logout">
                              LOG OUT
                            </Link>
                </div>
            </div>
    </AppBar>
  );
};

export default Navbar;
