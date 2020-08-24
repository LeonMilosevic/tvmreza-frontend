import React from "react";
// import helpers
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";

const NavMiddle = () => {
  return (
    <div className="nav-middle-custom">
      <div className="container">
        <div className="nav-middle-wrapper">
          <div className="nav-middle-image">
            <img className="logo-img" src={Logo} alt="tvmreza" />
          </div>
          <div className="nav-middle-social">
            <div>
              <Link
                to="/public/videos"
                className="nav-btn waves-effect waves-light btn-large"
              >
                <i className="material-icons right">play_circle_outline</i>Video
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMiddle;
