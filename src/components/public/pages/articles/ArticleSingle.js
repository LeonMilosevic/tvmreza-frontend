import React, { useState, useEffect } from "react";
// import helpers
import { articleReadById, createPost } from "../../api/publicApi";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import parse from "html-react-parser";
import M from "materialize-css";
// import components
import NavTop from "../../navs/NavTop";
import NavMiddle from "../../navs/NavMiddle";
import NavBottom from "../../navs/NavBottom";
import SpinnerDots from "../../ui/SpinnerDots";
import Sidebanners from "../../reusable/Sidebanners";
import Footer from "../../reusable/Footer";
import Footerbanners from "../../reusable/Footerbanners";

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
  }, [location]);

  useEffect(() => {
    M.AutoInit();
  }, []);

  const handleChangeInput = (name) => (e) => {
    setPost({ ...post, [name]: e.target.value });
  };

  const clickSubmitPost = (e) => {
    e.preventDefault();
    if (
      post.articleId === null ||
      post.username === "" ||
      post.textContent === ""
    ) {
      setError("Sva polja su potrebna");
    } else {
      setPostCreateLoading(true);
      createPost(post)
        .then((response) => {
          if (response.status === 200) {
            setSuccess("Uspesno ste postavili komentar");
          } else {
            setError("Nesto je poslo napokao");
          }
        })
        .catch((error) => console.log(error));
    }
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
                  <div>{article.dateDisplay.slice(0, 10)}</div>
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
                      />
                      <label htmlFor="name">Vaše ime*</label>
                    </div>
                    <div className="input-field">
                      <textarea
                        onChange={handleChangeInput("textContent")}
                        id="komentar"
                        className="materialize-textarea"
                      ></textarea>
                      <label htmlFor="komentar">Vaš komentar*</label>
                    </div>
                    <button
                      onClick={clickSubmitPost}
                      className="survey-btn survey-btn-filled"
                    >
                      Postavi
                    </button>
                  </div>
                </div>
                <div className="singlearticle-post-comment-area">
                  {article.posts.map((post, i) => (
                    <div className="signlearticle-post-comment-wrapper" key={i}>
                      <div className="signlearticle-post-comment-header">
                        <span>{post.username}</span> |
                        <span>{post.dateCreated.slice(0, 10)}</span>
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
