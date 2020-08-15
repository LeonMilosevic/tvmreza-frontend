import React, { useState, useEffect } from "react";
// import helpers
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import M from "materialize-css";
import { videosectionCreate } from "../../../api/adminApi";
// import comopnents
import AdminNavbar from "../../../dashboard/AdminNavbar";
import AdminManagementNavbar from "../../../dashboard/AdminManagementNavbar";
import CrudTab from "../../../dashboard/CrudTab";

const CreateVideo = () => {
  const [newVideo, setNewVideo] = useState({
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

  const handleChangeVideo = (name) => (e) => {
    setError("");
    setSuccess("");
    setNewVideo({ ...newVideo, [name]: e.target.value });
  };

  const handleChangeEditor = (e, editor) => {
    setError("");
    setSuccess("");
    const editorData = editor.getData();
    setNewVideo({ ...newVideo, content: editorData });
  };

  const clickSubmitCreateVideo = () => {
    setError("");
    setSuccess("");
    if (
      newVideo.videoUrl === "" ||
      newVideo.content === "" ||
      newVideo.header === "" ||
      newVideo.location === "" ||
      dateDisplay === null
    ) {
      return setError("Mandatory fields are missing");
    }
    videosectionCreate(newVideo, dateDisplay)
      .then((response) => {
        if (response.ok === false) {
          setError("Please fill in all the fields");
        } else {
          setSuccess("Video created");
        }
      })
      .catch(() => setError("Please fill in all the fields"));
  };

  // sporazum form for fields
  const createVideoForm = () => (
    <>
      <div className="input-field col s12">
        <input
          onChange={handleChangeVideo("videoUrl")}
          type="text"
          className="validate"
        />
        <label htmlFor="videourl">Video link</label>
      </div>
      <div className="input-field col s12">
        <input
          onChange={handleChangeVideo("header")}
          type="text"
          className="validate"
        />
        <label htmlFor="header">Naslov</label>
      </div>
      <div className="input-field col s12">
        <input
          onChange={handleChangeVideo("location")}
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
        <h1>Write Video text</h1>
        <CKEditor onChange={handleChangeEditor} editor={ClassicEditor} />
      </div>
      {success && <div className="col s12 success-msg">{success}</div>}
      {error && <div className="col s12 error-msg">{error}</div>}
      <div className="col s12 submit-btn">
        <button
          onClick={clickSubmitCreateVideo}
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
        createTo={"/admin/videos/create"}
        readTo={"/admin/videos/readall"}
      />
      <div className="container">{createVideoForm()}</div>
    </>
  );
};

export default CreateVideo;
