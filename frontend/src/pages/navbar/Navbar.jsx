import { AppBar } from "@mui/material";
import { Link } from "react-router-dom";

import "./navbar.css";

import logo from "../../../assets/Logo.png";
import { useDispatch, useSelector } from "react-redux";
import { userOnload } from "../../Reducers/userSlice";
import FormatIndentDecreaseSharpIcon from "@mui/icons-material/FormatIndentDecreaseSharp";
import FormatIndentIncreaseSharpIcon from "@mui/icons-material/FormatIndentIncreaseSharp";
import { useState } from "react";

const Navbar = () => {
  const { isAdmin, isLogin } = useSelector((state) => state.users);

  const [isMenu, setIsMenu] = useState(false);

  const dispatch = useDispatch();
  const logOut = () => {
    setIsMenu(!isMenu);
    localStorage.removeItem("codictionToken");
    dispatch(userOnload());
  };
  return (
    <>
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

          <div className="icon">
            {isMenu ? (
              <FormatIndentDecreaseSharpIcon
                onClick={() => setIsMenu(!isMenu)}
              />
            ) : (
              <FormatIndentIncreaseSharpIcon
                onClick={() => setIsMenu(!isMenu)}
              />
            )}
          </div>
        </div>
      </AppBar>
      <div className={isMenu ? "menuUpdated" : "menu"}>
        <div className="Alllinks">
          <Link className="link" onClick={() => setIsMenu(!isMenu)} to="/">
            HOME
          </Link>
          <Link className="link" onClick={() => setIsMenu(!isMenu)} to="/course">
            COURSE
          </Link>
          {isAdmin ? (
            <Link className="link" onClick={() => setIsMenu(!isMenu)} to="/dashboard">
              DASHBOARD
            </Link>
          ) : null}
          {isLogin ? null : (
            <div className="newLogin">
              <Link className="link" onClick={() => setIsMenu(!isMenu)} to="/login">
                LOGIN
              </Link>
              <Link className="link" onClick={() => setIsMenu(!isMenu)} to="/register">
                REGISTER
              </Link>
            </div>
          )}

          {isLogin ? (
            <button className="logOut_button"  onClick={logOut}>
              LOG OUT
            </button>
          ) : null}
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Navbar;
