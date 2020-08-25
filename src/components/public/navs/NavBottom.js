import React from "react";
import { NavLink } from "react-router-dom";

const NavBottom = (props) => {
  return (
    <div className="nav-bottom-custom">
      <div className="container nav-buttom-wrapper">
        <div>
          <NavLink className="nav-bottom-link-first" to="/">
            Pocetna
          </NavLink>
          {props.categories.map((category, i) => (
            <NavLink
              key={i}
              to={`/${category.categoryName}/${category.id}`}
              className="nav-bottom-link"
            >
              {category.categoryName}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBottom;
