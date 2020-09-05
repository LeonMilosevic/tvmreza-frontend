import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavTop from "../../navs/NavTop";
import NavMiddle from "../../navs/NavMiddle";
import NavBottom from "../../navs/NavBottom";
import Sidebanners from "../../reusable/Sidebanners";
import Footer from "../../reusable/Footer";
import Footerbanners from "../../reusable/Footerbanners";

const LicaSingle = () => {
  const [lice, setLice] = useState({});
  const location = useLocation();

  useEffect(() => {
    if (location.state !== undefined) {
      setLice(location.state);
    }
    // else make a error page or redirect to home
  }, [location]);

  return (
    <>
      <NavTop />
      <NavMiddle />
      <NavBottom />
      <div className="container">
        <div className="row margin-top2">
          <div className="col s9 m9">
            <div className="singlearticle-header">
              {lice.firstName}&nbsp;{lice.lastName}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s9 m9">
            <div className="licasingle-wrapper">
              <div className="licasinge-image">
                <img src={lice.imageUrl} alt="logo" />
              </div>
              <div className="licasingle-text">
                {lice.firstName && (
                  <div className="licasingle-text-content">
                    <span className="partner-div-li-span">
                      Ime:
                      <br />
                    </span>
                    {lice.firstName}&nbsp;{lice.lastName}
                  </div>
                )}
                {lice.workPosition && (
                  <div className="licasingle-text-content">
                    <span className="partner-div-li-span">
                      Radno mesto:
                      <br />
                    </span>
                    {lice.workPosition}
                  </div>
                )}
                {lice.career && (
                  <div className="licasingle-text-content">
                    <span className="partner-div-li-span">
                      Karijera:
                      <br />
                    </span>
                    {lice.career}
                  </div>
                )}
                {lice.education && (
                  <div className="licasingle-text-content">
                    <span className="partner-div-li-span">
                      Edukacija:
                      <br />
                    </span>
                    {lice.education}
                  </div>
                )}
                {lice.tvprogram && (
                  <div className="licasingle-text-content">
                    <span className="partner-div-li-span">
                      Programi TV Mreže:
                      <br />
                    </span>
                    {lice.tvprogram}
                  </div>
                )}
                {lice.professionalChallenges && (
                  <div className="licasingle-text-content">
                    <span className="partner-div-li-span">
                      Profesionalni izazovi:
                      <br />
                    </span>
                    {lice.professionalChallenges}
                  </div>
                )}
                {lice.contact && (
                  <div className="licasingle-text-content">
                    <span className="partner-div-li-span">
                      Kontakt:
                      <br />
                    </span>
                    {lice.contact}
                  </div>
                )}
              </div>
            </div>
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

export default LicaSingle;
