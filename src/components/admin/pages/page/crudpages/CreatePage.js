import React, { useState, useEffect } from "react";
// import helpers
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import M from "materialize-css";
import { navpageCreate } from "../../../api/adminApi";
// import comopnents
import AdminNavbar from "../../../dashboard/AdminNavbar";
import AdminManagementNavbar from "../../../dashboard/AdminManagementNavbar";
import CrudTab from "../../../dashboard/CrudTab";

const CreatePage = () => {
  const [newPage, setNewPage] = useState({
    navbarName: "",
    navbarOrder: "1",
    header: "",
    videoUrl: "",
    imageUrl: "",
    content: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  useEffect(() => {
    M.AutoInit();
  }, []);

  const handleChangePage = (name) => (e) => {
    setError("");
    setSuccess("");
    setNewPage({ ...newPage, [name]: e.target.value });
  };

  const handleChangeEditor = (e, editor) => {
    setError("");
    setSuccess("");
    const editorData = editor.getData();
    setNewPage({ ...newPage, content: editorData });
  };

  const clickSubmitCreatePage = () => {
    setError("");
    setSuccess("");
    if (
      newPage.navbarName === "" ||
      newPage.navbarOrder === "" ||
      newPage.content === "" ||
      newPage.header === ""
    ) {
      return setError("Mandatory fields are missing");
    }
    navpageCreate(newPage)
      .then((response) => {
        if (response.ok === false) {
          setError("Please fill in all the fields");
        } else {
          setSuccess("Page created");
        }
      })
      .catch(() => setError("Please fill in all the fields"));
  };

  // page form for fields
  const createPageForm = () => (
    <>
      <div className="input-field col s12">
        <input
          onChange={handleChangePage("navbarName")}
          type="text"
          className="validate"
        />
        <label htmlFor="keywords">Navbar ime</label>
      </div>
      <div className="input-field col s12">
        <select onChange={handleChangePage("navbarOrder")}>
          <option value="" disabled>
            Choose your option
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label>Odaberi redosled</label>
      </div>
      <div className="input-field col s12">
        <input
          onChange={handleChangePage("videoUrl")}
          type="text"
          className="validate"
        />
        <label htmlFor="videourl">Video link</label>
      </div>
      <div className="input-field col s12">
        <input
          onChange={handleChangePage("imageUrl")}
          type="text"
          className="validate"
        />
        <label htmlFor="imageurl">Image link</label>
      </div>
      <div className="input-field col s12">
        <input
          onChange={handleChangePage("header")}
          type="text"
          className="validate"
        />
        <label htmlFor="header">Naslov</label>
      </div>
      <div className="col s12">
        <h1>Write Page</h1>
        <CKEditor onChange={handleChangeEditor} editor={ClassicEditor} />
      </div>
      {success && <div className="col s12 success-msg">{success}</div>}
      {error && <div className="col s12 error-msg">{error}</div>}
      <div className="col s12 submit-btn">
        <button
          onClick={clickSubmitCreatePage}
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
        createTo={"/admin/pages/create"}
        readTo={"/admin/pages/readall"}
      />
      <div className="container">{createPageForm()}</div>
    </>
  );
};

export default CreatePage;
