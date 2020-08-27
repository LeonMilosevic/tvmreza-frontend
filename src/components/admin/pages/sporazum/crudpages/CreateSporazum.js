import React, { useState, useEffect } from "react";
// import helpers
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import M from "materialize-css";
import { sporazumCreate } from "../../../api/adminApi";
// import comopnents
import AdminNavbar from "../../../dashboard/AdminNavbar";
import AdminManagementNavbar from "../../../dashboard/AdminManagementNavbar";
import CrudTab from "../../../dashboard/CrudTab";

const CreateSporazum = () => {
  const [newSporazum, setNewSporazum] = useState({
    header: "",
    videoUrl: "",
    content: "",
    location: "",
  });
  const [dateDisplay, setDateDisplay] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    M.AutoInit();
  }, []);

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

  const handleChangeSporazum = (name) => (e) => {
    setError("");
    setSuccess("");
    setNewSporazum({ ...newSporazum, [name]: e.target.value });
  };

  const handleChangeEditor = (e, editor) => {
    setError("");
    setSuccess("");
    const editorData = editor.getData();
    setNewSporazum({ ...newSporazum, content: editorData });
  };

  const clickSubmitCreateSporazum = () => {
    setError("");
    setSuccess("");
    if (
      newSporazum.videoUrl === "" ||
      newSporazum.content === "" ||
      newSporazum.header === "" ||
      newSporazum.location === "" ||
      dateDisplay === null
    ) {
      return setError("Mandatory fields are missing");
    }
    sporazumCreate(newSporazum, dateDisplay)
      .then((response) => {
        if (response.ok === false) {
          setError("Please fill in all the fields");
        } else {
          setSuccess("Sporazum created");
        }
      })
      .catch(() => setError("Please fill in all the fields"));
  };

  // sporazum form for fields
  const createSporazumForm = () => (
    <>
      <div className="input-field col s12 input-fileds-custom">
        <input
          onChange={handleChangeSporazum("videoUrl")}
          type="text"
          className="validate"
        />
        <label htmlFor="videourl">Video link</label>
      </div>
      <div className="input-field col s12 input-fileds-custom">
        <input
          onChange={handleChangeSporazum("header")}
          type="text"
          className="validate"
        />
        <label htmlFor="header">Naslov</label>
      </div>
      <div className="input-field col s12 input-fileds-custom">
        <input
          onChange={handleChangeSporazum("location")}
          type="text"
          className="validate"
        />
        <label htmlFor="header">Lokacija</label>
      </div>
      <div className="col s12">
        <input onClose={handleDate} type="text" className="datepicker" />
        <label htmlFor="date">Pick a date</label>
      </div>
      <div className="col s12">
        <h1>Write Sporazum text</h1>
        <CKEditor onChange={handleChangeEditor} editor={ClassicEditor} />
      </div>
      {success && <div className="col s12 success-msg">{success}</div>}
      {error && <div className="col s12 error-msg">{error}</div>}
      <div className="col s12 submit-btn">
        <button
          onClick={clickSubmitCreateSporazum}
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
        createTo={"/admin/sporazum/create"}
        readTo={"/admin/sporazum/readall"}
      />
      <div className="container">{createSporazumForm()}</div>
    </>
  );
};

export default CreateSporazum;
