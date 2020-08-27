import React, { useState, useEffect } from "react";
// import helpers
import { useLocation } from "react-router-dom";
import M from "materialize-css";
import { surveyUpdateById } from "../../../api/adminApi";
// import comopnents
import AdminNavbar from "../../../dashboard/AdminNavbar";
import AdminManagementNavbar from "../../../dashboard/AdminManagementNavbar";
import CrudTab from "../../../dashboard/CrudTab";

const UpdateSurvey = () => {
  const [survey, setSurvey] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  let location = useLocation();

  useEffect(() => {
    setSurvey(location.state);
  }, [location]);

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

  const clickSubmitUpdateSurvey = () => {
    setError("");
    setSuccess("");
    if (survey.answerOne === "" || survey.answerTwo === "") {
      return setError("At least two answers");
    }
    surveyUpdateById(survey)
      .then((response) => {
        if (response.ok === false) {
          setError("Please fill in all the fields");
        } else {
          setSuccess("Anketa updated");
        }
      })
      .catch(() => setError("Please fill in all the fields"));
  };

  const updateSurveyForm = () => (
    <>
      {survey && (
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
            <label htmlFor="question">Pitanje: {survey.question}</label>
          </div>
          <div className="input-field col s12 input-fileds-custom">
            <input
              onChange={handleChangeSurvey("answerOne")}
              type="text"
              className="validate"
            />
            <label htmlFor="answer">Odgovor 1: {survey.answerOne}</label>
          </div>
          <div className="input-field col s12 input-fileds-custom">
            <input
              onChange={handleChangeSurvey("answerTwo")}
              type="text"
              className="validate"
            />
            <label htmlFor="answer">Odgovor 2: {survey.answerTwo}</label>
          </div>
          <div className="input-field col s12 input-fileds-custom">
            <input
              onChange={handleChangeSurvey("answerThree")}
              type="text"
              className="validate"
            />
            <label htmlFor="answer">Odgovor 3: {survey.answerThree}</label>
          </div>
          <div className="input-field col s12 input-fileds-custom">
            <input
              onChange={handleChangeSurvey("answerFour")}
              type="text"
              className="validate"
            />
            <label htmlFor="answer">Odgovor 4: {survey.answerFour}</label>
          </div>
          <div className="input-field col s12 input-fileds-custom">
            <input
              onChange={handleChangeSurvey("answerFive")}
              type="text"
              className="validate"
            />
            <label htmlFor="answer">Odgovor 5: {survey.answerFive}</label>
          </div>
          {success && <div className="col s12 success-msg">{success}</div>}
          {error && <div className="col s12 error-msg">{error}</div>}
          <div className="col s12 submit-btn">
            <button
              onClick={clickSubmitUpdateSurvey}
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
        createTo={"/admin/survey/create"}
        readTo={"/admin/survey/readall"}
      />
      <div className="container">{updateSurveyForm()}</div>
    </>
  );
};

export default UpdateSurvey;
