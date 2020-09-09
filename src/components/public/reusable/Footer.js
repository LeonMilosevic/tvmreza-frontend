import React from "react";
// import img
import Logo from "../../../assets/Logo.svg";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col m3 s5">
            <Link className="empty-link" to="/">
              <img className="logo-img" src={Logo} alt="tvmreza" />
            </Link>
          </div>
          <div className="col m3 s6 offset-m1 footer-text">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
              soluta, ad laborum ut modi error deleniti eveniet voluptas, natus
              rem quo, molestiae perferendis vel iste necessitatibus ipsam nisi
              vero repellendus.
            </p>
          </div>
          <div className="col m2 s6 offset-m3 offset-s1">
            <h5>Kontakt:</h5>
            <div className="valign-wrapper">
              <i className="material-icons tiny">home</i>
              &nbsp; 38218 Leposavic
            </div>
            <div className="valign-wrapper">
              <i className="material-icons tiny">phone</i>
              &nbsp; +381(0)2883165
            </div>
            <div className="valign-wrapper">
              <i className="material-icons tiny">email</i>
              &nbsp; office@tvmreza.tv
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <div className="footer-copyright-wrapper">
            <div>© 2020 Copyright TV Mreza</div>
            <div className="footer-social">
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
