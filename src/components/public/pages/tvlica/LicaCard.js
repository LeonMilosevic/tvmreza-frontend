import React from "react";
// import helpers
import { Link } from "react-router-dom";

const LicaCard = (props) => {
  console.log(props.lica);
  return (
    <div className="lica-wrapper">
      <img className="lica-image" src={props.lica.imageUrl} alt="slika" />
      <div></div>
    </div>
  );
};

export default LicaCard;
