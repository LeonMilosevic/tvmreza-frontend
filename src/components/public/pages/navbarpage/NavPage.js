import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
// import helpers
import { useLocation } from "react-router-dom";
// import components
import NavTop from "../../navs/NavTop";
import NavMiddle from "../../navs/NavMiddle";
import NavBottom from "../../navs/NavBottom";
import Sidebanners from "../../reusable/Sidebanners";
import Footerbanners from "../../reusable/Footerbanners";
import Footer from "../../reusable/Footer";

const NavPage = () => {
  const [navpageContent, setNavpageContent] = useState({});
  const location = useLocation();

  useEffect(() => {
    if (location.state !== undefined) {
      setNavpageContent(location.state);
    } // else redirect to error page
  }, [location]);

  return (
    <>
      <NavTop />
      <NavMiddle />
      <NavBottom />
      <div className="container">
        <div className="row margin-top2">
          <div className="col s9 m9">
            <div className="singlearticle-header">{navpageContent.header}</div>
          </div>
        </div>
        <div className="row">
          <div className="col s9 m9">
            <div className="navpage-image">
              <img src={navpageContent.imagesUrl} alt="logo" />
            </div>
            <div>{navpageContent.content && parse(navpageContent.content)}</div>
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

export default NavPage;
