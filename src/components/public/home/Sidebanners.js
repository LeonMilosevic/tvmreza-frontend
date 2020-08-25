import React from "react";
// import helpers
import { Link } from "react-router-dom";

const Sidebanners = (props) => {
  return (
    <div className="col s12 m2">
      <div className="sidebanner-wrapper">
        {props.sidebanners.map((sidebanner, i) => (
          <div className="sidebanner">
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
