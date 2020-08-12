import React, { useState, useEffect } from "react";
// import helpers
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { NavLink } from "react-router-dom";
import M from "materialize-css";
// import comopnents
import AdminNavbar from "../../../dashboard/AdminNavbar";
import AdminManagementNavbar from "../../../dashboard/AdminManagementNavbar";
import { categoryReadAllByOrder, articleCreate } from "../../../api/adminApi";
// TODO: organise code, select not working properly
const CreateArticles = () => {
  const [newArticle, setNewArticle] = useState({
    categoryId: null,
    keywords: [],
    videoUrl: "",
    imageUrl: "",
    content: "",
    header: "",
    author: "",
  });
  const [dateDisplay, setDateDisplay] = useState(null);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    categoryReadAllByOrder()
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => setCategories(responseJson))
      .catch((error) => setError(error));
  }, []);

  useEffect(() => {
    M.AutoInit();
    M.Datepicker.init(document.querySelector(".datepicker"), {
      onClose: () => handleDate(),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);

  const handleDate = () => {
    setDateDisplay(Date.parse(document.querySelector(".datepicker").value));
  };
  const handleChangeArticle = (name) => (e) => {
    setNewArticle({ ...newArticle, [name]: e.target.value });
  };

  const handleChangeEditor = (e, editor) => {
    const editorData = editor.getData();
    setNewArticle({ ...newArticle, content: editorData });
  };

  const clickSubmitCreateArticle = (e) => {
    articleCreate(newArticle, dateDisplay).then((response) =>
      console.log(response)
    );
  };

  const createArticleForm = () => (
    <>
      <div className="input-field col s12">
        <select onChange={handleChangeArticle("categoryId")}>
          <option value="" disabled>
            Choose a category
          </option>
          {categories &&
            categories.map((category, i) => (
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
      <div className="crud-tab">
        <NavLink
          activeClassName="crud-tab-link-active"
          className="crud-tab-link"
          to="/admin/articles/create"
        >
          Create new
        </NavLink>
        <NavLink
          activeClassName="crud-tab-link-active"
          className="crud-tab-link"
          to="/admin/articles/readall"
        >
          Read all
        </NavLink>
      </div>
      <div className="container">{createArticleForm()}</div>
    </>
  );
};

export default CreateArticles;
