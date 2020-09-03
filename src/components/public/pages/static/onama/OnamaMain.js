import React, { useState, useEffect } from "react";
// import helpers
import { Link, useLocation } from "react-router-dom";
import { partnerstvo, vizijaimisija, pokrivenost } from "./onamaData";
// import components
import Logo from "../../../../../assets/Logo.svg";
import NavTop from "../../../navs/NavTop";
import NavMiddle from "../../../navs/NavMiddle";
import NavBottom from "../../../navs/NavBottom";
import Footerbanners from "../../../reusable/Footerbanners";
import Footer from "../../../reusable/Footer";
import Sidebanners from "../../../reusable/Sidebanners";

const OnamaMain = () => {
  const [content, setContent] = useState({});
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split("/").pop();
    if (path === "partnerstvo") return setContent(partnerstvo);
    if (path === "vizijaimisija") return setContent(vizijaimisija);
    if (path === "pokrivenost") return setContent(pokrivenost);
  }, [location]);

  return (
    <>
      <NavTop />
      <NavMiddle />
      <NavBottom />
      <div className="container">
        <div className="row margin-top2">
          <div className="col s9 m9">
            <div className="singlearticle-header">{content.header}</div>
          </div>
        </div>
        <div className="row">
          <div className="col s9 m9">
            <div className="logo-bg">
              <img src={Logo} alt="logo" />
            </div>
            <p className="onama-paragraph">{content.paragraph1}</p>
            <p className="onama-paragraph2">
              {content.paragraph2 ? content.paragraph2 : ""}
            </p>
            <ul className="onama-ul">
              <li>
                <Link to="/partneri/tvmir">TV Mir</Link>
              </li>
              <li>
                <Link to="/partneri/tvmost">TV Most</Link>
              </li>
              <li>
                <Link to="/partneri/tvpuls">TV Puls</Link>
              </li>
              <li>
                <Link to="/partneri/tvherc">TV Herc</Link>
              </li>
              <li>
                <Link to="/partneri/newpress">New Press Production</Link>
              </li>
            </ul>
          </div>
          <div className="col s2 m2 offset-s1 offset-m1">
            <Sidebanners />
          </div>
        </div>
      </div>
      <Footerbanners />
      <Footer />
    </>
  );
};

export default OnamaMain;
