import React, { useState, useEffect } from "react";
// import helpers
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import M from "materialize-css";
import { categoryReadAllByOrder, articleCreate } from "../../../api/adminApi";
// import comopnents
import AdminNavbar from "../../../dashboard/AdminNavbar";
import AdminManagementNavbar from "../../../dashboard/AdminManagementNavbar";
import CrudTab from "../../../dashboard/CrudTab";
// TODO: organise code
const CreateArticles = () => {
  /* 
  States for articles to populate them. 
  We separeted dateDisplay from article since there is a problem with date overwriting fields on change.
  We have an empty category state and we use useEffect to make a call to a protected admin route and populate it.
  */
  const [newArticle, setNewArticle] = useState({
    categoryId: null,
    keywords: "",
    videoUrl: "",
    imageUrl: "",
    content: "",
    header: "",
    author: "",
  });
  const [dateDisplay, setDateDisplay] = useState(null);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  // populating category state from an api call. We use two .then() since one then() returns a promise, and then we need to extract the promise.

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

  useEffect(() => {
    M.AutoInit();
  }, [categories]);

  useEffect(() => {
    M.Datepicker.init(document.querySelector(".datepicker"), {
      onClose: () => handleDate(),
    });
  }, []);

  // we are parsing the date in epoh time that we get from materialize datepicker
  const handleDate = () => {
    setError("");
    setSuccess("");
    setDateDisplay(Date.parse(document.querySelector(".datepicker").value));
  };

  const handleChangeArticle = (name) => (e) => {
    setError("");
    setSuccess("");
    setNewArticle({ ...newArticle, [name]: e.target.value });
  };

  const handleChangeEditor = (e, editor) => {
    setError("");
    setSuccess("");
    const editorData = editor.getData();
    setNewArticle({ ...newArticle, content: editorData });
  };

  const clickSubmitCreateArticle = () => {
    setError("");
    setSuccess("");
    if (
      newArticle.categoryId === null ||
      newArticle.keywords === "" ||
      newArticle.content === "" ||
      newArticle.header === "" ||
      newArticle.author === ""
    ) {
      return setError("Mandatory fields are missing");
    }
    articleCreate(newArticle, dateDisplay)
      .then((response) => {
        if (response.ok === false) {
          setError("Please fill in all the fields");
        } else {
          setSuccess("Article created");
        }
      })
      .catch(() => setError("Please fill in all the fields"));
  };
  // article form for fields
  const createArticleForm = () => (
    <>
      <div className="input-field col s12">
        <select onChange={handleChangeArticle("categoryId")}>
          <option value="">Choose a category</option>
          {categories.map((category, i) => (
            <option value={category.id} key={i}>
              {category.categoryName}
            </option>
          ))}
        </select>
        <label>Select category</label>
      </div>
      <div className="input-field col s12">
        <input
          onChange={handleChangeArticle("keywords")}
          type="text"
          className="validate"
        />
        <label htmlFor="keywords">Type keywords</label>
      </div>
      <div className="input-field col s12">
        <input
          onChange={handleChangeArticle("videoUrl")}
          type="text"
          className="validate"
        />
        <label htmlFor="videourl">Video link</label>
      </div>
      <div className="input-field col s12">
        <input
          onChange={handleChangeArticle("imageUrl")}
          type="text"
          className="validate"
        />
        <label htmlFor="imageurl">Image link</label>
      </div>
      <div className="input-field col s12">
        <input
          onChange={handleChangeArticle("header")}
          type="text"
          className="validate"
        />
        <label htmlFor="header">Naslov</label>
      </div>
      <div className="input-field col s12">
        <input
          onChange={handleChangeArticle("author")}
          type="text"
          className="validate"
        />
        <label htmlFor="author">Autor</label>
      </div>
      <div className="col s12">
        <input onClose={handleDate} type="text" className="datepicker" />
        <label htmlFor="date">Pick a date</label>
      </div>
      <div className="col s12">
        <h1>Write article</h1>
        <CKEditor onChange={handleChangeEditor} editor={ClassicEditor} />
      </div>
      {success && <div className="col s12 success-msg">{success}</div>}
      {error && <div className="col s12 error-msg">{error}</div>}
      <div className="col s12 submit-btn">
        <button
          onClick={clickSubmitCreateArticle}
          className="waves-effect waves-light btn"
        >
          Submit
        </button>
      </div>
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
      <div className="container">{createArticleForm()}</div>
    </>
  );
};

export default CreateArticles;
