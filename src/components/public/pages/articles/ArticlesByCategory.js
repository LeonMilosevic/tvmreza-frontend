import React from "react";
import { useLocation, Redirect } from "react-router-dom";
import NavTop from "../../navs/NavTop";
import NavMiddle from "../../navs/NavMiddle";
import NavBottom from "../../navs/NavBottom";

const ArticlesByCategory = () => {
  const location = useLocation();

  const displayArticlesByCategory = () => (
    <>
      <NavTop />
      <NavMiddle />
      <NavBottom />
    </>
  );

  return (
    <>
      {location.category === undefined ? (
        <Redirect to="/" />
      ) : (
        displayArticlesByCategory()
      )}
    </>
  );
};

export default ArticlesByCategory;
