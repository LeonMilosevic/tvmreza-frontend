import React from "react";
import { NavLink } from "react-router-dom";
const CrudTab = (props) => {
  return (
    <div className="crud-tab">
      <NavLink
        activeClassName="crud-tab-link-active"
        className="crud-tab-link"
        to={props.createTo}
      >
        Create new
      </NavLink>
      <NavLink
        activeClassName="crud-tab-link-active"
        className="crud-tab-link"
        to={props.readTo}
      >
        Read all
      </NavLink>
    </div>
  );
};

export default CrudTab;
