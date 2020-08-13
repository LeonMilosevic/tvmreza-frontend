import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// import helpers
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import M from "materialize-css";
// import components
import AdminNavbar from "../../../dashboard/AdminNavbar";
import AdminManagementNavbar from "../../../dashboard/AdminManagementNavbar";
import CrudTab from "../../../dashboard/CrudTab";
import {
  categoryReadAllByOrder,
  articleUpdateById,
} from "../../../api/adminApi";

/**
 * We will update a selected article, that got state from the link object.
 * We will populate the state and record any changes.
 * We will submit the state to the backend api to update selected article with new fields.
 *
 */
const UpdateArticles = () => {
  const [article, setArticle] = useState({});
  const [dateDisplay, setDateDisplay] = useState(null);
  const [articleContent, setArticleContent] = useState("");
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  let location = useLocation();

  // populate article state from location state
  useEffect(() => {
    setArticle(location.state);
    setDateDisplay(location.state.dateDisplay);
    setArticleContent(location.state.content);
  }, [location]);

  useEffect(() => {
    M.AutoInit();
  }, [categories]);

  useEffect(() => {
    M.Datepicker.init(document.querySelector(".datepicker"), {
      onClose: () => handleDate(),
    });
  }, []);

  // populate categories so they can be changed
  useEffect(() => {
    categoryReadAllByOrder()
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        setCategories(responseJson);
      })
      .catch((error) =>
        setError(
          "there was a problem fetching categories, please try to refresh the page"
        )
      );
  }, []);

  const handleChangeArticle = (name) => (e) => {
    setError("");
    setSuccess("");
    setArticle({ ...article, [name]: e.target.value });
  };

  const handleDate = () => {
    setError("");
    setSuccess("");
    setDateDisplay(Date.parse(document.querySelector(".datepicker").value));
  };

  const handleChangeEditor = (e, editor) => {
    setError("");
    setSuccess("");
    const editorData = editor.getData();
    setArticleContent(editorData);
  };

  const clickSubmitUpdateArticle = () => {
    setError("");
    setSuccess("");
    if (
      article.categoryId === null ||
      article.keywords === "" ||
      articleContent === "" ||
      article.header === "" ||
      article.author === ""
    ) {
      return setError("Mandatory fields are missing");
    }
    articleUpdateById(article, dateDisplay, articleContent)
      .then((response) => {
        if (response.ok === false) {
          setError("Please fill in all the fields");
        } else {
          setSuccess("Article created");
        }
      })
      .catch(() => setError("Please fill in all the fields"));
  };

  const updateArticleForm = () => (
    <>
      {article && (
        <>
          <div className="input-field col s12">
            <select onChange={handleChangeArticle("categoryId")}>
              <option className="attention" value="">
                No category selected
              </option>
              {categories.map((category, i) => (
                <option value={category.id} key={i}>
                  {category.categoryName}
                </option>
              ))}
            </select>
            <label>Choose a category</label>
          </div>
          <div className="input-field col s12">
            <input
              onChange={handleChangeArticle("keywords")}
              type="text"
              className="validate"
            />
            <label htmlFor="keywords">Keywords: {article.keywords}</label>
          </div>
          <div className="input-field col s12">
            <input
              onChange={handleChangeArticle("videoUrl")}
              type="text"
              className="validate"
            />
            <label htmlFor="videourl">
              Video:{" "}
              {article.videoUrl === "" ? "Add a video link" : article.videoUrl}
            </label>
          </div>
          <div className="input-field col s12">
            <input
              onChange={handleChangeArticle("imageUrl")}
              type="text"
              className="validate"
            />
            <label htmlFor="imageurl">
              image:{" "}
              {article.imageUrl === "" ? "Add an image link" : article.imageUrl}
            </label>
          </div>
          <div className="input-field col s12">
            <input
              onChange={handleChangeArticle("header")}
              type="text"
              className="validate"
            />
            <label htmlFor="header">Naslov: {article.header}</label>
          </div>
          <div className="input-field col s12">
            <input
              onChange={handleChangeArticle("author")}
              type="text"
              className="validate"
            />
            <label htmlFor="author">Autor: {article.author}</label>
          </div>
          <div className="col s12">
            <input onClose={handleDate} type="text" className="datepicker" />
            <label htmlFor="date">
              Date: {article.dateDisplay && article.dateDisplay.slice(0, 10)}
            </label>
          </div>
          <div className="col s12">
            <h1>Write article</h1>
            <CKEditor
              onChange={handleChangeEditor}
              editor={ClassicEditor}
              data={articleContent}
            />
          </div>
          {success && <div className="col s12 success-msg">{success}</div>}
          {error && <div className="col s12 error-msg">{error}</div>}
          <div className="col s12 submit-btn">
            <button
              onClick={clickSubmitUpdateArticle}
              className="waves-effect waves-light btn"
            >
              Submit
            </button>
          </div>
        </>
      )}
    </>
  );
  return (
    <>
      <AdminNavbar />
      <AdminManagementNavbar />
      <CrudTab
        createTo={"/admin/articles/create"}
        readTo={"/admin/articles/readall"}
      />
      <div className="container">{updateArticleForm()}</div>
    </>
  );
};

export default UpdateArticles;
