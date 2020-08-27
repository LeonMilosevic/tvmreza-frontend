import React, { useState, useEffect } from "react";
// import helpers
import M from "materialize-css";
// import comopnents
import AdminNavbar from "../../../dashboard/AdminNavbar";
import AdminManagementNavbar from "../../../dashboard/AdminManagementNavbar";
import CrudTab from "../../../dashboard/CrudTab";
import { sidebannerCreate } from "../../../api/adminApi";

const CreateBanner = () => {
  const [newBanner, setNewBanner] = useState({
    imageUrl: "",
    linkToUrl: "",
    sidebannerOrder: "1",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    M.AutoInit();
  }, []);

  const handleChangeBanner = (name) => (e) => {
    setError("");
    setSuccess("");
    setNewBanner({ ...newBanner, [name]: e.target.value });
  };

  const clickSubmitCreateBanner = () => {
    if (
      newBanner.imageUrl === "" ||
      newBanner.linkToUrl === "" ||
      newBanner.sidebannerOrder === ""
    ) {
      return setError("Fields are missing");
    }
    sidebannerCreate(newBanner)
      .then((response) => {
        if (response.ok === false) {
          setError(`Redosled ${newBanner.sidebannerOrder} je vec u upotrebi`);
        } else {
          setSuccess("Banner created");
        }
      })
      .catch(() => setError("Something went wrong please try again"));
  };

  const createBannerForm = () => (
    <>
      <div className="input-field col s12 input-fileds-custom">
        <input
          onChange={handleChangeBanner("imageUrl")}
          type="text"
          className="validate"
        />
        <label htmlFor="keywords">Image link</label>
      </div>
      <div className="input-field col s12 input-fileds-custom">
        <input
          onChange={handleChangeBanner("linkToUrl")}
          type="text"
          className="validate"
        />
        <label htmlFor="keywords">Link to a page</label>
      </div>
      <div className="input-field col s12 input-fileds-custom">
        <select onChange={handleChangeBanner("sidebannerOrder")}>
          <option value="" disabled>
            Choose your option
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
        <label>Odaberi redosled</label>
      </div>
      {success && <div className="col s12 success-msg">{success}</div>}
      {error && <div className="col s12 error-msg">{error}</div>}
      <div className="col s12 submit-btn">
        <button
          onClick={clickSubmitCreateBanner}
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
        createTo={"/admin/banners/create"}
        readTo={"/admin/banners/readall"}
      />
      <div className="container">{createBannerForm()}</div>
    </>
  );
};

export default CreateBanner;
