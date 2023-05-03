import { AppBar } from "@mui/material";
import { Link } from "react-router-dom";

import "./navbar.css";

import logo from "../../../public/Logo.png";
import { useDispatch, useSelector } from "react-redux";
import { userOnload } from "../../Reducers/userSlice";

const Navbar = () => {
  const { isAdmin, isLogin } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const logOut = () => {
    localStorage.removeItem("codictionToken");
    dispatch(userOnload());
  };
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
            {isAdmin ? (
              <Link className="link" to="/dashboard">
                DASHBOARD
              </Link>
            ) : null}
          </div>
        </div>

          <div className="navbar_second">
            {isLogin ? null : (
              <div className="notLogin">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </div>
            )}

            {isLogin ? (
              <button className="logOut_button" onClick={logOut}>
                LOG OUT
              </button>
            ) : null}

          </div>
      </div>
    </AppBar>
  );
};

export default Navbar;
