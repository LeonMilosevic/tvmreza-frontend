import React, { useState, useEffect } from "react";
// import helpers
import { useLocation } from "react-router-dom";
import {
  tvmrezapromofilm,
  kosnetinfo,
  slobodnosrpskitalkshow,
  agrar,
  koreni,
} from "./programData";
// import components
import NavTop from "../../../navs/NavTop";
import NavMiddle from "../../../navs/NavMiddle";
import NavBottom from "../../../navs/NavBottom";
import Footerbanners from "../../../reusable/Footerbanners";
import Footer from "../../../reusable/Footer";
import Sidebanners from "../../../reusable/Sidebanners";

const ProgramMain = () => {
  const [content, setContent] = useState({});
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split("/").pop();
    if (path === "tvmrezapromofilm") return setContent(tvmrezapromofilm);
    if (path === "kosnetinfo") return setContent(kosnetinfo);
    if (path === "slobodnosrpskitalkshow")
      return setContent(slobodnosrpskitalkshow);
    if (path === "agrar") return setContent(agrar);
    if (path === "koreni") return setContent(koreni);
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
              <img src={content.image} alt="logo" />
            </div>
            {content.paragraph && (
              <div className="partneri-div-li">{content.paragraph}</div>
            )}
            {content.paragraph2 && (
              <div className="partneri-div-li">{content.paragraph2}</div>
            )}
            {content.paragraph3 && (
              <div className="partneri-div-li">{content.paragraph3}</div>
            )}
            {content.paragraph4 && (
              <div className="partneri-div-li">{content.paragraph4}</div>
            )}
            {content.trajanjeEmisije && (
              <div className="partneri-div-li">
                <span className="partner-div-li-span">
                  Trajanje emisije:&nbsp;
                </span>
                {content.trajanjeEmisije}
              </div>
            )}
            {content.emitovanje && (
              <div className="partneri-div-li">
                <span className="partner-div-li-span">Emitovanje:&nbsp;</span>
                {content.emitovanje}
              </div>
            )}
            {content.produkcija && (
              <div className="partneri-div-li">
                <span className="partner-div-li-span">Produkcija:&nbsp;</span>
                {content.produkcija}
              </div>
            )}
            {content.urednici && (
              <div className="partneri-div-li">
                <span className="partner-div-li-span">Urednici:&nbsp;</span>
                {content.urednici}
              </div>
            )}
            {content.urednikivoditelj && (
              <div className="partneri-div-li">
                <span className="partner-div-li-span">
                  Urednik i Voditelj:&nbsp;
                </span>
                {content.urednikivoditelj}
              </div>
            )}
            {content.rezija && (
              <div className="partneri-div-li">
                <span className="partner-div-li-span">Rezija:&nbsp;</span>
                {content.rezija}
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

export default ProgramMain;
