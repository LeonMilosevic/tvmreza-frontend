import React from "react";
import { Switch, Route } from "react-router-dom";
// importing routes
import AdminDashboard from "../admin/dashboard/AdminDashboard";
import AdminLogin from "../public/login/AdminLogin";
import PrivateRoute from "../auth/PrivateRoute";
import AdminArticles from "../admin/pages/article/AdminArticles";
import AdminBanner from "../admin/pages/banner/AdminBanner";
import AdminCategory from "../admin/pages/category/AdminCategory";
import AdminFooter from "../admin/pages/footer/AdminFooter";
import AdminPage from "../admin/pages/page/AdminPage";
import AdminPost from "../admin/pages/post/AdminPost";
import AdminSporazum from "../admin/pages/sporazum/AdminSporazum";
import AdminLica from "../admin/pages/tvlica/AdminLica";
import AdminVideo from "../admin/pages/video/AdminVideo";
import CreateArticles from "../admin/pages/article/crudpages/CreateArticles";
import ReadallArticles from "../admin/pages/article/crudpages/ReadallArticles";

/**
 * Component: Routes
 * Description: This component will manage routes and display components based on routes.
 * Author: Leon
 */
const Routes = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/admin/dashboard" component={AdminDashboard} />
      <PrivateRoute exact path="/admin/articles" component={AdminArticles} />
      <PrivateRoute
        exact
        path="/admin/articles/create"
        component={CreateArticles}
      />
      <PrivateRoute
        exact
        path="/admin/articles/readall"
        component={ReadallArticles}
      />
      <PrivateRoute exact path="/admin/banners" component={AdminBanner} />
      <PrivateRoute exact path="/admin/categories" component={AdminCategory} />
      <PrivateRoute exact path="/admin/footers" component={AdminFooter} />
      <PrivateRoute exact path="/admin/pages" component={AdminPage} />
      <PrivateRoute exact path="/admin/posts" component={AdminPost} />
      <PrivateRoute exact path="/admin/sporazum" component={AdminSporazum} />
      <PrivateRoute exact path="/admin/tvfaces" component={AdminLica} />
      <PrivateRoute exact path="/admin/videos" component={AdminVideo} />
      <Route exact path="/public/admin/login" component={AdminLogin} />
    </Switch>
  );
};

export default Routes;
