import React from "react";
// import helpers
import { NavLink } from "react-router-dom";

const NavTop = () => {
  const handleOnMouseEnterHideIcon = (e) => {
    e.target.nextElementSibling.style.display = "none";
  };

  const handleOnMouseLeaveShowIcon = (e) => {
    e.target.nextElementSibling.style.display = "block";
    e.target.value = "";
  };
  return (
    <div className="nav-top-custom">
      <div className="container nav-wrapper-custom">
        <div className="nav-content-left">
          <NavLink
            activeClassName="nav-active"
            className="nav-top-link-first"
            to="/"
          >
            Link 1
          </NavLink>
          <NavLink className="nav-top-link" to="/">
            Link 2
          </NavLink>
          <NavLink className="nav-top-link" to="/">
            Link 3
          </NavLink>
          <NavLink className="nav-top-link" to="/">
            Link 4
          </NavLink>
          <NavLink className="nav-top-link" to="/">
            Link 5
          </NavLink>
        </div>
        <div className="nav-content-right">
          <div className="input-field">
            <input
              id="search"
              type="text"
              required
              onFocus={handleOnMouseEnterHideIcon}
              onBlur={handleOnMouseLeaveShowIcon}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavTop;
