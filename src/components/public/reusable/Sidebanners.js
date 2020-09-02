import React from "react";

import { PublicContext } from "../../context/public/PublicContext";

const Sidebanners = () => {
  const { sideBanners } = React.useContext(PublicContext);

  return (
    <div className="grid-item-sidebanner">
      <div className="sidebanner-wrapper">
        {sideBanners.map((sidebanner, i) => (
          <div key={i} className="sidebanner">
            <a href={sidebanner.linkToUrl}>
              <img
                className="sidebanner-image"
                src={sidebanner.imageUrl}
                alt="sidebanner"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebanners;
