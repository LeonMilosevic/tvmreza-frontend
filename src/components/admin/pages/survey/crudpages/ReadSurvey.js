import React, { useState, useEffect } from "react";
import { surveyReadAll, surveyRemoveById } from "../../../api/adminApi";
import { Link } from "react-router-dom";
// import comopnents
import AdminNavbar from "../../../dashboard/AdminNavbar";
import AdminManagementNavbar from "../../../dashboard/AdminManagementNavbar";
import CrudTab from "../../../dashboard/CrudTab";

const ReadSurvey = () => {
  const [surveys, setSurveys] = useState([]);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    surveyReadAll()
      .then((response) => response.json())
      .then((responseJson) => setSurveys(responseJson))
      .catch((error) => console.log(error));
  }, [success]);

  const handleClickRemoveSurvey = (e, id) => {
    e.preventDefault();
    surveyRemoveById(id).then((response) => {
      if (response.ok) {
        setSuccess("Deleted successfully");
      } else {
        setSuccess("Something went wrong");
      }
    });
  };

  const displaySurveys = () => (
    <>
      {success && <div className="success-msg">{success}</div>}
      <div className="col s12">
        {surveys &&
          surveys.map((survey, i) => (
            <div className="article-table" key={i}>
              <div>
                <span>
                  <span className="article-table-list">Pitanje</span>:{" "}
                  {survey.question} |{" "}
                </span>
                <span>
                  <span className="article-table-list">Prikaz</span>:{" "}
                  {survey.display ? "Da" : "Ne"} |{" "}
                </span>
                <span>
                  <span className="article-table-list">Napravljen</span>:{" "}
                  {survey.dateCreated.slice(0, 10)}
                </span>
              </div>

              <div>
                <Link
                  to={{
                    pathname: `/admin/survey/update/${survey.id}`,
                    state: survey,
                  }}
                  className="link-update"
                >
                  Update
                </Link>{" "}
                |
                <Link
                  onClick={(e) => handleClickRemoveSurvey(e, survey.id)}
                  to="/"
                  className="link-remove"
                >
                  {" "}
                  Delete
                </Link>{" "}
                |{" "}
                <Link
                  to={{
                    pathname: `/admin/survey/details/${survey.id}`,
                    state: survey,
                  }}
                  className="link-details"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
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
      {displaySurveys()}
    </>
  );
};

export default ReadSurvey;
