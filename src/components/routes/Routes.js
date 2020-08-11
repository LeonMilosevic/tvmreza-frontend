import React from "react";
import { Switch, Route } from "react-router-dom";
// importing routes
import AdminDashboard from "../admin/dashboard/AdminDashboard";
import AdminLogin from "../public/login/AdminLogin";

/**
 * Component: Routes
 * Description: This component will manage routes and display components based on routes.
 * Author: Leon
 */
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/admin/dashboard" component={AdminDashboard} />
      <Route exact path="/public/admin/login" component={AdminLogin} />
    </Switch>
  );
};

export default Routes;
