import React, { useState, useEffect } from "react";
// import helpers
import { articleReadById, createPost } from "../../api/publicApi";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import parse from "html-react-parser";
import M from "materialize-css";
import Moment from "react-moment";
// import components
import NavTop from "../../navs/NavTop";
import NavMiddle from "../../navs/NavMiddle";
import NavBottom from "../../navs/NavBottom";
import SpinnerDots from "../../ui/SpinnerDots";
import Sidebanners from "../../reusable/Sidebanners";
import Footer from "../../reusable/Footer";
import Footerbanners from "../../reusable/Footerbanners";
import SpinnerCircle from "../../ui/SpinnerCircle";

/**
 * ArticlesSingle: Used to display article. We are making a call to the server api, as soon as component is load with the id that is passed from the location function.
 *
 * We are also having a create a post functionality, to create and read comments for a certain article.
 *
 */
const ArticleSingle = () => {
  const [article, setArticle] = useState({});
  const [post, setPost] = useState({
    articleId: null,
    username: "",
    textContent: "",
  });
  const [loading, setLoading] = useState(true);
  const [postCreateLoading, setPostCreateLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const location = useLocation();

  useEffect(() => {
    articleReadById(location.pathname.split("/").pop())
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          return undefined;
        }
      })
      .then((responseJson) => {
        setArticle(responseJson);
        setPost({ ...post, articleId: responseJson.id });
        setLoading(false);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  useEffect(() => {
    M.AutoInit();
  }, []);

  const handleChangeInput = (name) => (e) => {
    setError("");
    setSuccess("");
    setPost({ ...post, [name]: e.target.value });
  };

  const clickSubmitPost = (e) => {
    if (
      post.articleId === null ||
      post.username === "" ||
      post.textContent === ""
    ) {
      setError("Sva polja su potrebna");
    } else if (post.textContent.length > 356) {
      setError("Text nesme biti duzi od 356 karaktera");
    } else {
      setPostCreateLoading(true);
      createPost(post)
        .then((response) => {
          if (response.status === 200) {
            setPostCreateLoading(false);
            setSuccess("Uspesno ste postavili komentar");
            setPost({ ...post, username: "", textContent: "" });
          } else {
            setPostCreateLoading(false);
            setError("Nesto je poslo napokao");
          }
        })
        .catch((error) => console.log(error));
    }
    e.preventDefault();
  };

  return (
    <>
      <NavTop />
      <NavMiddle />
      <NavBottom />
      {loading ? (
        <SpinnerDots />
      ) : (
        <>
          <div className="container">
            <div className="row margin-top2">
              <div className="col s9 m9">
                <div className="singlearticle-header">{article.header}</div>
                <div className="singlearticle-subheader">
                  <div>{article.categoryName}</div>
                  <div>
                    <Moment
                      format="D MMM YYYY"
                      date={article.dateDisplay}
                      withTitle
                    />
                  </div>
                  <div>{article.author}</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s9 m9">
                {article.videoUrl ? (
                  <div className="singlearticle-player">
                    <ReactPlayer
                      url={article.videoUrl}
                      controls={true}
                      width={"100%"}
                      height={"100%"}
                    />
                  </div>
                ) : (
                  <div className="singlearticle-image-wrapper">
                    <img
                      className="singlearticle-image"
                      src={article.imageUrl}
                      alt="slika"
                    />
                  </div>
                )}
                <div className="singlearticle-content">
                  {parse(article.content)}
                </div>
                <div className="singlearticle-posts">
                  <div className="singlearticle-posts-header">
                    Komentari{" "}
                    <span className="singlearticle-posts-header-span">
                      ({article.posts.length})
                    </span>
                  </div>
                  <div className="singlearticle-post-area">
                    <div className="input-field">
                      <input
                        onChange={handleChangeInput("username")}
                        id="name"
                        type="text"
                        className="validate"
                        value={post.username}
                      />
                      <label htmlFor="name">Vaše ime*</label>
                    </div>
                    <div className="input-field">
                      <textarea
                        onChange={handleChangeInput("textContent")}
                        id="komentar"
                        className="materialize-textarea"
                        value={post.textContent}
                      ></textarea>
                      <label htmlFor="komentar">Vaš komentar*</label>
                    </div>
                    {postCreateLoading ? (
                      <SpinnerCircle />
                    ) : (
                      <button
                        onClick={clickSubmitPost}
                        className="survey-btn survey-btn-filled"
                      >
                        Postavi
                      </button>
                    )}

                    {success ? (
                      <div className="custom-success">{success}</div>
                    ) : (
                      ""
                    )}
                    {error ? <div className="custom-error">{error}</div> : ""}
                  </div>
                </div>
                <div className="singlearticle-post-comment-area">
                  {article.posts.map((post, i) => (
                    <div className="signlearticle-post-comment-wrapper" key={i}>
                      <div className="signlearticle-post-comment-header">
                        <span className="signlearticle-post-comment-username">
                          {post.username}
                        </span>{" "}
                        |{" "}
                        <span className="signlearticle-post-comment-date">
                          <Moment
                            format="D MMM YYYY"
                            date={post.dateCreated}
                            withTitle
                          />
                        </span>
                      </div>
                      {post.textContent}
                    </div>
                  ))}
                </div>
              </div>
              <div className="col s2 m2 offset-s1 offset-m1">
                <Sidebanners />
              </div>
            </div>
          </div>
          <Footerbanners />
          <Footer />
        </>
      )}
    </>
  );
};

export default ArticleSingle;
