import React from "react";
// import helpers
import { PublicContext } from "../../context/public/PublicContext";

const Footerbanners = () => {
  const { footerBanners } = React.useContext(PublicContext);

  return (
    <>
      <div className="row">
        <div className="center-flex">
          {footerBanners.slice(0, 5).map((footerbanner, i) => (
            <div key={i} className="col s2 m2">
              <img src={footerbanner.imageUrl} alt="banners" />
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="center-flex">
          {footerBanners.slice(5, 10).map((footerbanner, i) => (
            <div key={i} className="col s2 m2">
              <img src={footerbanner.imageUrl} alt="banners" />
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="center-flex">
          {footerBanners.slice(10).map((footerbanner, i) => (
            <div key={i} className="col s2 m2">
              <img
                className="footerbanner-image"
                src={footerbanner.imageUrl}
                alt="banners"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Footerbanners;
