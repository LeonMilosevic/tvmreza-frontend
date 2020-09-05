import React from "react";
// import helpers
import { Link } from "react-router-dom";

const LicaCard = (props) => {
  return (
    <div className="grid-lica-item">
      <Link
        to={{
          pathname: `/tvlica/lica/${props.lica.firstName}`,
          state: props.lica,
        }}
      >
        <img className="lica-image" src={props.lica.imageUrl} alt="slika" />
      </Link>
      <div className="lica-text">
        {props.lica.firstName}&nbsp;{props.lica.lastName}
      </div>
    </div>
  );
};

export default LicaCard;
