import React from "react";
// import helpers
import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo.svg";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const NavMiddle = () => {
  return (
    <div className="nav-middle-custom">
      <div className="container">
        <div className="nav-middle-wrapper">
          <div className="nav-middle-image">
            <Link to="/" className="empty-link">
              <img className="logo-img" src={Logo} alt="tvmreza" />
            </Link>
          </div>
          <div className="nav-middle-social">
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/NezavisnaTvMreza/"
              >
                <FaFacebookF className="nav-icon-color-f" />
              </a>
            </div>
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/NezavisnaTVMrea"
              >
                <FaTwitter className="nav-icon-color-f" />
              </a>
            </div>
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/channel/UCBhi5RNBF78DhCxebCc5NIg"
              >
                <FaYoutube className="nav-icon-color-f" />
              </a>
            </div>
            <div>
              <Link
                to="/video/poslednji"
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
