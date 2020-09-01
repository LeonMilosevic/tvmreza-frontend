import React, { useState, useEffect } from "react";
import { PublicContext } from "../../../context/public/PublicContext";
import { voteSurvey } from "../../api/publicApi";
import SurveyResults from "./SurveyResults";
import SpinnerCircle from "../../ui/SpinnerCircle";

/**
 * Survey public component
 * We will set survey from context to a local state, and pass it to SurveyResults components.
 * We will be updating on every client vote local state so that the information is up to date when client goes to result component
 *
 * If voted state is true we will disable the vote button, so the client can vote once per visit
 * If displayResults state is true we will display results in the survey box
 */
const Survey = () => {
  const { survey } = React.useContext(PublicContext);
  const [answerSelected, setAnswerSelected] = useState("");
  const [error, setError] = useState("");
  const [voted, setVoted] = useState(false);
  const [surveyLocal, setSurveyLocal] = useState({});
  const [displayResults, setDisplayResults] = useState(false);
  const [voteLoading, setVoteLoading] = useState(false);

  useEffect(() => {
    setSurveyLocal(survey);
  }, [survey]);

  const handleChangeSurveySelection = (e) => {
    setError("");
    setAnswerSelected(e.target.value);
  };

  const handleClickVoteSubmit = (e) => {
    e.preventDefault();
    if (answerSelected !== "") {
      setVoteLoading(true);
      setTimeout(() => {
        voteSurvey(survey.id, answerSelected)
          .then((response) => response.json())
          .then((responseJson) => {
            setVoteLoading(false);
            setVoted(true);
            setSurveyLocal(responseJson);
            setDisplayResults(true);
          })
          .catch(() => setError("Doslo je do greske"));
      }, 2000);
    } else {
      setError("Odaberite odgovor");
    }
  };

  const handleClickDisplayResults = () => {
    setDisplayResults(true);
  };

  const surveyDisplayForm = () => (
    <>
      <div onChange={handleChangeSurveySelection} className="survey-wrapper">
        <div className="survey-header">{surveyLocal.question}</div>
        <div className="survey-answer-card">
          <label>
            <input value={"answerOne"} name="answers" type="radio" />
            <span>{surveyLocal.answerOne}</span>
          </label>
        </div>
        <div className="survey-answer-card">
          <label>
            <input value={"answerTwo"} name="answers" type="radio" />
            <span>{surveyLocal.answerTwo}</span>
          </label>
        </div>
        {survey.answerThree !== "" ? (
          <div className="survey-answer-card">
            <label>
              <input value={"answerThree"} name="answers" type="radio" />
              <span>{surveyLocal.answerThree}</span>
            </label>
          </div>
        ) : (
          ""
        )}
        {survey.answerFour !== "" ? (
          <div className="survey-answer-card">
            <label>
              <input value={"answerFour"} name="answers" type="radio" />
              <span>{surveyLocal.answerFour}</span>
            </label>
          </div>
        ) : (
          ""
        )}
        {survey.answerFive !== "" ? (
          <div className="survey-answer-card">
            <label>
              <input value={"answerFive"} name="answers" type="radio" />
              <span>{surveyLocal.answerFive}</span>
            </label>
          </div>
        ) : (
          ""
        )}
        {error && <div className="error-msg-survey">{error}</div>}
        <div className="survey-buttons">
          {voteLoading === false ? (
            <>
              <button
                onClick={handleClickVoteSubmit}
                className={
                  voted
                    ? `btn disabled survey-btn survey-btn-filled`
                    : "survey-btn survey-btn-filled"
                }
              >
                Glasaj
              </button>
              <button
                onClick={handleClickDisplayResults}
                className="survey-btn survey-btn-empty"
              >
                Rezultati
              </button>
            </>
          ) : (
            <SpinnerCircle />
          )}
        </div>
      </div>
    </>
  );

  return (
    <>
      {survey === undefined ? (
        ""
      ) : (
        <div className="grid-item-survey">
          {displayResults ? (
            <SurveyResults
              survey={surveyLocal}
              setDisplayResults={setDisplayResults}
            />
          ) : (
            surveyDisplayForm()
          )}
        </div>
      )}
    </>
  );
};

export default Survey;
