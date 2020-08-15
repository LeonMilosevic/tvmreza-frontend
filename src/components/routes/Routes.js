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
import UpdateArticles from "../admin/pages/article/crudpages/UpdateArticles";
import CreateBanner from "../admin/pages/banner/crudpages/CreateBanner";
import ReadBanner from "../admin/pages/banner/crudpages/ReadBanner";
import CreateCategory from "../admin/pages/category/crudpages/CreateCategory";
import ReadCategory from "../admin/pages/category/crudpages/ReadCategory";
import CreateFooter from "../admin/pages/footer/crudfooter/CreateFooter";
import ReadFooter from "../admin/pages/footer/crudfooter/ReadFooter";
import CreatePage from "../admin/pages/page/crudpages/CreatePage";
import ReadPages from "../admin/pages/page/crudpages/ReadPages";
import ReadPosts from "../admin/pages/post/crudpages/ReadPosts";
import CreateSporazum from "../admin/pages/sporazum/crudpages/CreateSporazum";
import ReadSporazum from "../admin/pages/sporazum/crudpages/ReadSporazum";
import CreateVideo from "../admin/pages/video/crudpages/CreateVideo";
import ReadVideo from "../admin/pages/video/crudpages/ReadVideo";

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
      <PrivateRoute
        exact
        path="/admin/article/update/:id"
        component={UpdateArticles}
      />
      <PrivateRoute exact path="/admin/banners" component={AdminBanner} />
      <PrivateRoute
        exact
        path="/admin/banners/create"
        component={CreateBanner}
      />
      <PrivateRoute
        exact
        path="/admin/banners/readall"
        component={ReadBanner}
      />
      <PrivateRoute exact path="/admin/categories" component={AdminCategory} />
      <PrivateRoute
        exact
        path="/admin/categories/create"
        component={CreateCategory}
      />
      <PrivateRoute
        exact
        path="/admin/categories/readall"
        component={ReadCategory}
      />
      <PrivateRoute exact path="/admin/footers" component={AdminFooter} />
      <PrivateRoute
        exact
        path="/admin/footers/create"
        component={CreateFooter}
      />
      <PrivateRoute
        exact
        path="/admin/footers/readall"
        component={ReadFooter}
      />
      <PrivateRoute exact path="/admin/pages" component={AdminPage} />
      <PrivateRoute exact path="/admin/pages/create" component={CreatePage} />
      <PrivateRoute exact path="/admin/pages/readall" component={ReadPages} />
      <PrivateRoute exact path="/admin/posts" component={AdminPost} />
      <PrivateRoute exact path="/admin/posts/readall" component={ReadPosts} />
      <PrivateRoute exact path="/admin/sporazum" component={AdminSporazum} />
      <PrivateRoute
        exact
        path="/admin/sporazum/create"
        component={CreateSporazum}
      />
      <PrivateRoute
        exact
        path="/admin/sporazum/readall"
        component={ReadSporazum}
      />
      <PrivateRoute exact path="/admin/tvfaces" component={AdminLica} />
      <PrivateRoute exact path="/admin/videos" component={AdminVideo} />
      <PrivateRoute exact path="/admin/videos/create" component={CreateVideo} />
      <PrivateRoute exact path="/admin/videos/readall" component={ReadVideo} />
      <Route exact path="/public/admin/login" component={AdminLogin} />
    </Switch>
  );
};

export default Routes;
