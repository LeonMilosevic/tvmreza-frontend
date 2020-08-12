import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoggedIn } from "./auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/public/admin/login",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
