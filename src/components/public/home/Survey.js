import React from "react";
import { PublicContext } from "../../context/public/PublicContext";
const Survey = () => {
  const { survey } = React.useContext(PublicContext);
  const [answerSelected, setAnswerSelected] = React.useState("");

  const handleChangeSurveySelection = (e) => {
    setAnswerSelected(e.target.value);
  };

  console.log(survey);

  const surveyDisplayForm = () => (
    <>
      <div onChange={handleChangeSurveySelection} className="survey-wrapper">
        <div className="survey-header">{survey.question}</div>
        <div className="survey-answer-card">
          <label>
            <input value={survey.answerOne} name="answers" type="radio" />
            <span>{survey.answerOne}</span>
          </label>
        </div>
        <div className="survey-answer-card">
          <label>
            <input value={survey.answerTwo} name="answers" type="radio" />
            <span>{survey.answerTwo}</span>
          </label>
        </div>
        {survey.answerThree !== "" ? (
          <div className="survey-answer-card">
            <label>
              <input value={survey.answerThree} name="answers" type="radio" />
              <span>{survey.answerThree}</span>
            </label>
          </div>
        ) : (
          ""
        )}
        {survey.answerFour !== "" ? (
          <div className="survey-answer-card">
            <label>
              <input value={survey.answerFour} name="answers" type="radio" />
              <span>{survey.answerFour}</span>
            </label>
          </div>
        ) : (
          ""
        )}
        {survey.answerFive !== "" ? (
          <div className="survey-answer-card">
            <label>
              <input value={survey.answerFive} name="answers" type="radio" />
              <span>{survey.answerFive}</span>
            </label>
          </div>
        ) : (
          ""
        )}
        <div className="survey-buttons">
          <button className="survey-btn survey-btn-filled">Glasaj</button>
          <button className="survey-btn survey-btn-empty">Rezultati</button>
        </div>
      </div>
    </>
  );

  return <div className="grid-item-survey">{surveyDisplayForm()}</div>;
};

export default Survey;
