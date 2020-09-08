import React, { useState, useEffect } from "react";
// import helpers
import { useLocation } from "react-router-dom";
import { tvmir, tvmost, tvpuls, tvherc, newpress } from "./partneriData";
// import components
import NavTop from "../../../navs/NavTop";
import NavMiddle from "../../../navs/NavMiddle";
import NavBottom from "../../../navs/NavBottom";
import Footerbanners from "../../../reusable/Footerbanners";
import Footer from "../../../reusable/Footer";
import Sidebanners from "../../../reusable/Sidebanners";

const PartneriMain = () => {
  const [content, setContent] = useState({});
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split("/").pop();
    if (path === "tvmir") return setContent(tvmir);
    if (path === "tvmost") return setContent(tvmost);
    if (path === "tvpuls") return setContent(tvpuls);
    if (path === "tvherc") return setContent(tvherc);
    if (path === "newpress") return setContent(newpress);
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
            {content.sediste && (
              <div className="partneri-div-li">
                <span className="partner-div-li-span">Sedište:&nbsp;</span>{" "}
                {content.sediste}
              </div>
            )}
            {content.godinaOsnivanja && (
              <div className="partneri-div-li">
                <span className="partner-div-li-span">
                  Godina osnivanja:&nbsp;
                </span>{" "}
                {content.godinaOsnivanja}
              </div>
            )}
            {content.vrstaFrekvencije && (
              <div className="partneri-div-li">
                <span className="partner-div-li-span">
                  Vrsta frekfencije:&nbsp;
                </span>
                {content.vrstaFrekvencije}
              </div>
            )}
            {content.zemaljskaPokrivenost && (
              <div className="partneri-div-li">
                <span className="partner-div-li-span">
                  Zemaljska pokrivenost:&nbsp;
                </span>
                {content.zemaljskaPokrivenost}
              </div>
            )}
            {content.kablovskaPokrivenost && (
              <div className="partneri-div-li">
                <span className="partner-div-li-span">
                  Kablovska pokrivenost:&nbsp;
                </span>
                {content.kablovskaPokrivenost}
              </div>
            )}
            {content.tehcnickeKarakteristike && (
              <div className="partneri-div-li">
                <span className="partner-div-li-span">
                  Tehcnicke Karakteristike:&nbsp;
                </span>
                {content.tehcnickeKarakteristike}
              </div>
            )}
            {content.brojZaposlenih && (
              <div className="partneri-div-li">
                <span className="partner-div-li-span">
                  Broj Zaposlenih:&nbsp;
                </span>
                {content.brojZaposlenih}
              </div>
            )}
            {content.glavneEmisije && (
              <div className="partneri-div-li">
                <span className="partner-div-li-span">
                  Glavne Emisije:&nbsp;
                </span>
                {content.glavneEmisije}
              </div>
            )}
            {content.donatori && (
              <div className="partneri-div-li">
                <span className="partner-div-li-span">Donatori :&nbsp;</span>
                {content.donatori}
              </div>
            )}
            {content.kontakt && (
              <>
                <div className="partneri-div-li">
                  <span className="partner-div-li-span">Kontakt :&nbsp;</span>
                </div>
                {content.kontakt.map((k, i) => (
                  <div key={i}>{k}</div>
                ))}
              </>
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

export default PartneriMain;
