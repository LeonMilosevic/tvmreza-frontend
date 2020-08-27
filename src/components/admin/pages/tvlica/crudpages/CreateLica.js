import React, { useState, useEffect } from "react";
// import helpers
import { tvfaceCreate } from "../../../api/adminApi";
import M from "materialize-css";
// import comopnents
import AdminNavbar from "../../../dashboard/AdminNavbar";
import AdminManagementNavbar from "../../../dashboard/AdminManagementNavbar";
import CrudTab from "../../../dashboard/CrudTab";

const CreateLica = () => {
  const [lica, setLica] = useState({
    firstName: "",
    lastName: "",
    imageUrl: "",
    workPosition: "",
    career: "",
    education: "",
    tvprogram: "",
    professionalChallenges: "",
    contact: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    M.AutoInit();
  }, []);

  const handleChangeLica = (name) => (e) => {
    setError("");
    setSuccess("");
    setLica({ ...lica, [name]: e.target.value });
  };

  const clickSubmitCreateLica = () => {
    setError("");
    setSuccess("");
    if (lica.firstName === "" || lica.lastName === "" || lica.imageUrl === "") {
      return setError("Mandatory fields are missing");
    }
    tvfaceCreate(lica)
      .then((response) => {
        if (response.ok === false) {
          setError("Please fill in all the fields");
        } else {
          setSuccess("Lica created");
        }
      })
      .catch(() => setError("Please fill in all the fields"));
  };

  // tv lica form
  const createLicaForm = () => (
    <>
      <div className="input-field col s12 input-fileds-custom">
        <input
          onChange={handleChangeLica("firstName")}
          type="text"
          className="validate"
        />
        <label htmlFor="firstname">Ime</label>
      </div>
      <div className="input-field col s12 input-fileds-custom">
        <input
          onChange={handleChangeLica("lastName")}
          type="text"
          className="validate"
        />
        <label htmlFor="lastname">Prezime</label>
      </div>
      <div className="input-field col s12 input-fileds-custom">
        <input
          onChange={handleChangeLica("imageUrl")}
          type="text"
          className="validate"
        />
        <label htmlFor="lastname">Image link</label>
      </div>
      <div className="input-field col s12 input-fileds-custom">
        <input
          onChange={handleChangeLica("workPosition")}
          type="text"
          className="validate"
        />
        <label htmlFor="workPosition">Radna pozicija</label>
      </div>
      <div className="input-field col s12 input-fileds-custom">
        <input
          onChange={handleChangeLica("career")}
          type="text"
          className="validate"
        />
        <label htmlFor="karijera">Karijera</label>
      </div>
      <div className="input-field col s12 input-fileds-custom">
        <input
          onChange={handleChangeLica("education")}
          type="text"
          className="validate"
        />
        <label htmlFor="education">Edukacija</label>
      </div>
      <div className="input-field col s12 input-fileds-custom">
        <input
          onChange={handleChangeLica("tvprogram")}
          type="text"
          className="validate"
        />
        <label htmlFor="tvprogram">Program</label>
      </div>
      <div className="input-field col s12 input-fileds-custom">
        <input
          onChange={handleChangeLica("professionalChallenges")}
          type="text"
          className="validate"
        />
        <label htmlFor="professionalChallenges">Profesionalni Izazovi</label>
      </div>
      <div className="input-field col s12 input-fileds-custom">
        <input
          onChange={handleChangeLica("contact")}
          type="text"
          className="validate"
        />
        <label htmlFor="contact">Kontakt</label>
      </div>
      {success && <div className="col s12 success-msg">{success}</div>}
      {error && <div className="col s12 error-msg">{error}</div>}
      <div className="col s12 submit-btn">
        <button
          onClick={clickSubmitCreateLica}
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
        createTo={"/admin/tvfaces/create"}
        readTo={"/admin/tvfaces/readall"}
      />
      <div className="container">{createLicaForm()}</div>
    </>
  );
};

export default CreateLica;
