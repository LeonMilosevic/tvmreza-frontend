import React, { useEffect, useState } from "react";
// import helpers
import { tvlicaReadAll } from "../../api/publicApi";
// import components
import SpinnerDots from "../../ui/SpinnerDots";
import NavTop from "../../navs/NavTop";
import NavMiddle from "../../navs/NavMiddle";
import NavBottom from "../../navs/NavBottom";
import Sidebanners from "../../reusable/Sidebanners";
import Footerbanners from "../../reusable/Footerbanners";
import Footer from "../../reusable/Footer";
import LicaCard from "./LicaCard";

const LicaMain = () => {
  const [tvlica, setTvlica] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    tvlicaReadAll()
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          return undefined;
        }
      })
      .then((responseJson) => {
        setTvlica(responseJson);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <NavTop />
      <NavMiddle />
      <NavBottom />
      {loading ? (
        <SpinnerDots />
      ) : (
        <>
          <div className="container">
            <div className="row margin-top2">
              <div className="col s9 m9">
                <div className="video-display-header">TV Lica</div>
              </div>
            </div>
            <div className="row">
              <div className="col s9 m9 center">
                <div className="grid-lica">
                  {tvlica.map((lica, i) => (
                    <LicaCard key={i} lica={lica} />
                  ))}
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
      )}
    </>
  );
};

export default LicaMain;
