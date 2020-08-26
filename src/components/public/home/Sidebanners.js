import React from "react";

const Sidebanners = (props) => {
  return (
    <div className="grid-item-sidebanner">
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
