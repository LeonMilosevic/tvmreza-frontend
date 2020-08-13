import React, { useState, useEffect } from "react";
// import helpers
import M from "materialize-css";
// import comopnents
import AdminNavbar from "../../../dashboard/AdminNavbar";
import AdminManagementNavbar from "../../../dashboard/AdminManagementNavbar";
import CrudTab from "../../../dashboard/CrudTab";
import { footerbannerCreate } from "../../../api/adminApi";

const CreateFooterbanner = () => {
  const [newFooterbanner, setNewFooterbanner] = useState({
    imageUrl: "",
    linkToUrl: "",
    footerbannerOrder: "1",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    M.AutoInit();
  }, []);

  const handleChangeFooterbanner = (name) => (e) => {
    setError("");
    setSuccess("");
    setNewFooterbanner({ ...newFooterbanner, [name]: e.target.value });
  };

  const clickSubmitCreateFooterbanner = () => {
    if (
      newFooterbanner.imageUrl === "" ||
      newFooterbanner.linkToUrl === "" ||
      newFooterbanner.footerbannerOrder === ""
    ) {
      return setError("Fields are missing");
    }
    footerbannerCreate(newFooterbanner)
      .then((response) => {
        if (response.ok === false) {
          setError(
            `Redosled ${newFooterbanner.footerbannerOrder} je vec u upotrebi`
          );
        } else {
          setSuccess("Banner created");
        }
      })
      .catch(() => setError("Something went wrong please try again"));
  };

  const createFooterbannerForm = () => (
    <>
      <div className="input-field col s12">
        <input
          onChange={handleChangeFooterbanner("imageUrl")}
          type="text"
          className="validate"
        />
        <label htmlFor="keywords">Image link</label>
      </div>
      <div className="input-field col s12">
        <input
          onChange={handleChangeFooterbanner("linkToUrl")}
          type="text"
          className="validate"
        />
        <label htmlFor="keywords">Link to a page</label>
      </div>
      <div className="input-field col s12">
        <select onChange={handleChangeFooterbanner("footerbannerOrder")}>
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
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
        <label>Odaberi redosled</label>
      </div>
      {success && <div className="col s12 success-msg">{success}</div>}
      {error && <div className="col s12 error-msg">{error}</div>}
      <div className="col s12 submit-btn">
        <button
          onClick={clickSubmitCreateFooterbanner}
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
        createTo={"/admin/footers/create"}
        readTo={"/admin/footers/readall"}
      />
      <div className="container">{createFooterbannerForm()}</div>
    </>
  );
};

export default CreateFooterbanner;
