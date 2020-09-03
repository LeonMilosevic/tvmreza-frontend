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
import CreateLica from "../admin/pages/tvlica/crudpages/CreateLica";
import ReadLica from "../admin/pages/tvlica/crudpages/ReadLica";
import Home from "../public/home/Home";
import AdminSurvey from "../admin/pages/survey/AdminSurvey";
import CreateSurvey from "../admin/pages/survey/crudpages/CreateSurvey";
import ReadSurvey from "../admin/pages/survey/crudpages/ReadSurvey";
import UpdateSurvey from "../admin/pages/survey/crudpages/UpdateSurvey";
import ReadDetailsSurvey from "../admin/pages/survey/crudpages/ReadDetailsSurvey";
import ArticleByCategory from "../public/pages/articles/ArticlesByCategory";
import VideosByLatest from "../public/pages/videos/VideosByLatest";
import ArticlesByLatest from "../public/pages/articles/ArticlesByLatest";
import ArticlesByMostViewed from "../public/pages/articles/ArticlesByMostViewed";
import SporazumByLatest from "../public/pages/sporazum/SporazumByLatest";
import ArticleSingle from "../public/pages/articles/ArticleSingle";
import OnamaMain from "../public/pages/static/onama/OnamaMain";
import PartneriMain from "../public/pages/static/partneri/PartneriMain";
import ProgramMain from "../public/pages/static/program/ProgramMain";
import KontaktMain from "../public/pages/static/kontakt/KontaktMain";

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
      <PrivateRoute exact path="/admin/tvfaces/create" component={CreateLica} />
      <PrivateRoute exact path="/admin/tvfaces/readall" component={ReadLica} />
      <PrivateRoute exact path="/admin/videos" component={AdminVideo} />
      <PrivateRoute exact path="/admin/videos/create" component={CreateVideo} />
      <PrivateRoute exact path="/admin/videos/readall" component={ReadVideo} />
      <PrivateRoute exact path="/admin/survey" component={AdminSurvey} />
      <PrivateRoute
        exact
        path="/admin/survey/create"
        component={CreateSurvey}
      />
      <PrivateRoute exact path="/admin/survey/readall" component={ReadSurvey} />
      <PrivateRoute
        exact
        path="/admin/survey/update/:id"
        component={UpdateSurvey}
      />
      <PrivateRoute
        exact
        path="/admin/survey/details/:id"
        component={ReadDetailsSurvey}
      />
      {/* public routes */}
      <Route exact path="/" component={Home} />
      <Route exact path="/public/admin/login" component={AdminLogin} />
      <Route exact path="/kategorija/:name" component={ArticleByCategory} />
      <Route exact path="/video/poslednji" component={VideosByLatest} />
      <Route exact path="/vesti/poslednje" component={ArticlesByLatest} />
      <Route exact path="/vest/:name/:id" component={ArticleSingle} />
      <Route
        exact
        path="/vesti/najpopularnije"
        component={ArticlesByMostViewed}
      />
      <Route exact path="/sporazum/poslednje" component={SporazumByLatest} />
      <Route exact path="/onama/:name" component={OnamaMain} />
      <Route exact path="/partneri/:name" component={PartneriMain} />
      <Route exact path="/program/:name" component={ProgramMain} />
      <Route exact path="/kontakt/:name" component={KontaktMain} />
    </Switch>
  );
};

export default Routes;
