import React, { useState, useEffect } from "react";
// import helpers
import M from "materialize-css";
import { surveyCreate } from "../../../api/adminApi";
// import comopnents
import AdminNavbar from "../../../dashboard/AdminNavbar";
import AdminManagementNavbar from "../../../dashboard/AdminManagementNavbar";
import CrudTab from "../../../dashboard/CrudTab";

const CreateSurvey = () => {
  const [survey, setSurvey] = useState({
    display: false,
    question: "",
    answerOne: "",
    answerTwo: "",
    answerThree: "",
    answerFour: "",
    answerFive: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    M.AutoInit();
  }, []);

  const handleChangeSurvey = (name) => (e) => {
    setError("");
    setSuccess("");
    setSurvey({ ...survey, [name]: e.target.value });
  };

  const handleChangeCheckbox = () => {
    setSurvey({ ...survey, display: !survey.display });
  };

  const clickSubmitCreateSurvey = () => {
    setError("");
    setSuccess("");
    if (survey.answerOne === "" || survey.answerTwo === "") {
      return setError("At least two answers");
    }
    surveyCreate(survey)
      .then((response) => {
        if (response.ok === false) {
          setError("Please fill in all the fields");
        } else {
          setSuccess("Anketa created");
        }
      })
      .catch(() => setError("Please fill in all the fields"));
  };

  const createSurveyForm = () => (
    <>
      <div className="input-field col s12 input-fileds-custom">
        <label>
          <input
            type="checkbox"
            checked={survey.display}
            onChange={handleChangeCheckbox}
          />
          <span>Prikaz</span>
        </label>
      </div>
      <div className="input-field col s12 input-fileds-custom">
        <input
          onChange={handleChangeSurvey("question")}
          type="text"
          className="validate"
        />
        <label htmlFor="question">Pitanje</label>
      </div>
      <div className="input-field col s12 input-fileds-custom">
        <input
          onChange={handleChangeSurvey("answerOne")}
          type="text"
          className="validate"
        />
        <label htmlFor="odgovor">Odgovor 1</label>
      </div>
      <div className="input-field col s12 input-fileds-custom">
        <input
          onChange={handleChangeSurvey("answerTwo")}
          type="text"
          className="validate"
        />
        <label htmlFor="odgovor">Odgovor 2</label>
      </div>
      <div className="input-field col s12 input-fileds-custom">
        <input
          onChange={handleChangeSurvey("answerThree")}
          type="text"
          className="validate"
        />
        <label htmlFor="odgovor">Odgovor 3</label>
      </div>
      <div className="input-field col s12 input-fileds-custom">
        <input
          onChange={handleChangeSurvey("answerFour")}
          type="text"
          className="validate"
        />
        <label htmlFor="odgvor">Odgovor 4</label>
      </div>
      <div className="input-field col s12 input-fileds-custom">
        <input
          onChange={handleChangeSurvey("answerFive")}
          type="text"
          className="validate"
        />
        <label htmlFor="odgovor">Odgovor 5</label>
      </div>
      {success && <div className="col s12 success-msg">{success}</div>}
      {error && <div className="col s12 error-msg">{error}</div>}
      <div className="col s12 submit-btn">
        <button
          onClick={clickSubmitCreateSurvey}
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
        createTo={"/admin/survey/create"}
        readTo={"/admin/survey/readall"}
      />
      <div className="container">{createSurveyForm()}</div>
    </>
  );
};

export default CreateSurvey;
