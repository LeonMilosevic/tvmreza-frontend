import React, { useState } from "react";
import { PublicContext } from "../../context/public/PublicContext";
import { voteSurvey } from "../api/publicApi";
const Survey = () => {
  const { survey } = React.useContext(PublicContext);
  const [answerSelected, setAnswerSelected] = useState("");
  const [successSurvey, setSuccessSurvey] = useState({});
  const [error, setError] = useState("");
  const [voted, setVoted] = useState(false);
  const [results, setResults] = useState({});

  //TODO: reorganise in admin survey, disable btn on setVoted true, display results

  const handleChangeSurveySelection = (e) => {
    setAnswerSelected(e.target.value);
  };

  const handleClickVoteSubmit = (e) => {
    e.preventDefault();
    if (answerSelected !== "") {
      voteSurvey(survey.id, answerSelected)
        .then((response) => response.json())
        .then((responseJson) => {
          setVoted(true);
          setResults(responseJson);
        })
        .catch(() => setError("Doslo je do greske"));
    } else {
      setError("Odaberite odgovor");
    }
  };

  const surveyDisplayForm = () => (
    <>
      <div onChange={handleChangeSurveySelection} className="survey-wrapper">
        <div className="survey-header">{survey.question}</div>
        <div className="survey-answer-card">
          <label>
            <input value={"answerOne"} name="answers" type="radio" />
            <span>{survey.answerOne}</span>
          </label>
        </div>
        <div className="survey-answer-card">
          <label>
            <input value={"answerTwo"} name="answers" type="radio" />
            <span>{survey.answerTwo}</span>
          </label>
        </div>
        {survey.answerThree !== "" ? (
          <div className="survey-answer-card">
            <label>
              <input value={"answerThree"} name="answers" type="radio" />
              <span>{survey.answerThree}</span>
            </label>
          </div>
        ) : (
          ""
        )}
        {survey.answerFour !== "" ? (
          <div className="survey-answer-card">
            <label>
              <input value={"answerFour"} name="answers" type="radio" />
              <span>{survey.answerFour}</span>
            </label>
          </div>
        ) : (
          ""
        )}
        {survey.answerFive !== "" ? (
          <div className="survey-answer-card">
            <label>
              <input value={"answerFive"} name="answers" type="radio" />
              <span>{survey.answerFive}</span>
            </label>
          </div>
        ) : (
          ""
        )}
        <div className="survey-buttons">
          <button
            onClick={handleClickVoteSubmit}
            className="survey-btn survey-btn-filled"
          >
            Glasaj
          </button>
          <button className="survey-btn survey-btn-empty">Rezultati</button>
        </div>
      </div>
    </>
  );

  return <div className="grid-item-survey">{surveyDisplayForm()}</div>;
};

export default Survey;
