import React from "react";
// import img
import Logo from "../../../assets/logo.png";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col m3 s6">
            <img className="logo-img" src={Logo} alt="tvmreza" />
          </div>
          <div className="col m3 s6">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
              soluta, ad laborum ut modi error deleniti eveniet voluptas, natus
              rem quo, molestiae perferendis vel iste necessitatibus ipsam nisi
              vero repellendus.
            </p>
          </div>
          <div className="col m3 s12 offset-m3">
            <h5>Kontakt:</h5>
            <div className="valign-wrapper">
              <i className="material-icons tiny">home</i>
              &nbsp; Adresa
            </div>
            <div className="valign-wrapper">
              <i className="material-icons tiny">phone</i>
              &nbsp; Broj
            </div>
            <div className="valign-wrapper">
              <i className="material-icons tiny">email</i>
              &nbsp; email@email.com
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
                <a target="_blank" href="/">
                  <FaFacebookF className="nav-icon-color-f" />
                </a>
              </div>
              <div>
                <a target="_blank" href="/">
                  <FaTwitter className="nav-icon-color-f" />
                </a>
              </div>
              <div>
                <a target="_blank" href="/">
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
