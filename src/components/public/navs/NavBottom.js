import React from "react";
import { NavLink } from "react-router-dom";

const NavBottom = () => {
  return (
    <div className="nav-bottom-custom">
      <div className="container nav-buttom-wrapper">
        <div>
          <NavLink className="nav-bottom-link-first" to="/">
            Pocetna
          </NavLink>
          <NavLink className="nav-bottom-link" to="/">
            Kategorije
          </NavLink>
          <NavLink className="nav-bottom-link" to="/">
            Link 3
          </NavLink>
          <NavLink className="nav-bottom-link" to="/">
            Link 4
          </NavLink>
          <NavLink className="nav-bottom-link" to="/">
            Link 5
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBottom;
