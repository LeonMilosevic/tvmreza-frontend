import React, { useState, useEffect } from "react";
// import helpers
import { useLocation } from "react-router-dom";
import { tvmreza, tvmir, tvmost, tvpuls, tvherc } from "./kontaktData";
// import components
import NavTop from "../../../navs/NavTop";
import NavMiddle from "../../../navs/NavMiddle";
import NavBottom from "../../../navs/NavBottom";
import Footerbanners from "../../../reusable/Footerbanners";
import Footer from "../../../reusable/Footer";
import Sidebanners from "../../../reusable/Sidebanners";

const KontaktMain = () => {
  const [content, setContent] = useState({});
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split("/").pop();
    if (path === "tvmreza") return setContent(tvmreza);
    if (path === "tvmir") return setContent(tvmir);
    if (path === "tvmost") return setContent(tvmost);
    if (path === "tvpuls") return setContent(tvpuls);
    if (path === "tvherc") return setContent(tvherc);
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
            <div className="partneri-image">
              <img className="static-image" src={content.image} alt="logo" />
            </div>
            {content.direktor && (
              <div className="partneri-div-li">
                <span className="partner-div-li-span">Direktor:&nbsp;</span>{" "}
                {content.direktor}
              </div>
            )}
            {content.glavniUrednik && (
              <div className="partneri-div-li">
                <span className="partner-div-li-span">
                  Glavni Urednik I Odgovorno Lice:&nbsp;
                </span>{" "}
                {content.glavniUrednik}
              </div>
            )}
            {content.adresa && (
              <div className="partneri-div-li">
                <span className="partner-div-li-span">Adresa:&nbsp;</span>
                {content.adresa}
              </div>
            )}
            {content.telefon && (
              <div className="partneri-div-li">
                <span className="partner-div-li-span">telefon:&nbsp;</span>
                {content.telefon.map((tel) => (
                  <span>{tel}</span>
                ))}
              </div>
            )}
            {content.email && (
              <div className="partneri-div-li">
                <span className="partner-div-li-span">email:&nbsp;</span>
                {content.email.map((email) => (
                  <span>{email}</span>
                ))}
              </div>
            )}
            {content.websajt && (
              <div className="partneri-div-li">
                <span className="partner-div-li-span">web-sajt:&nbsp;</span>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={`http://${content.websajt}`}
                >
                  {content.websajt}
                </a>
              </div>
            )}
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

export default KontaktMain;
