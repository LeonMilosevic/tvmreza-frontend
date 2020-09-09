import React, { useState, useEffect } from "react";
// import helpers
import {
  addSumOfAllAnswers,
  calculatePercentage,
} from "../../../utils/PercentageCalculator";

/**
 * SurveyResults, we use utils helpers to calculate the percentage of votes per answer from the database
 * and we populate the table and display the results for the users.
 *
 */
const SurveyResults = (props) => {
  const [totalVotes, setTotalVotes] = useState(null);
  const [answerOnePercentage, setAnswerOnePercentage] = useState(null);
  const [answerTwoPercentage, setAnswerTwoPercentage] = useState(null);
  const [answerThreePercentage, setAnswerThreePercentage] = useState(null);
  const [answerFourPercentage, setAnswerFourPercentage] = useState(null);
  const [answerFivePercentage, setAnswerFivePercentage] = useState(null);

  useEffect(() => {
    setTotalVotes(
      addSumOfAllAnswers(
        props.survey.answerOneCount,
        props.survey.answerTwoCount,
        props.survey.answerThreeCount,
        props.survey.answerFourCount,
        props.survey.answerFiveCount
      )
    );
  }, [props.survey]);

  useEffect(() => {
    setAnswerOnePercentage(
      calculatePercentage(props.survey.answerOneCount, totalVotes)
    );
    setAnswerTwoPercentage(
      calculatePercentage(props.survey.answerTwoCount, totalVotes)
    );
    setAnswerThreePercentage(
      calculatePercentage(props.survey.answerThreeCount, totalVotes)
    );
    setAnswerFourPercentage(
      calculatePercentage(props.survey.answerFourCount, totalVotes)
    );
    setAnswerFivePercentage(
      calculatePercentage(props.survey.answerFiveCount, totalVotes)
    );
  }, [props.survey, totalVotes]);

  const handleChangeDisplayResults = () => {
    props.setDisplayResults(false);
  };

  return (
    <>
      <div className="survey-wrapper">
        <div className="survey-header">{props.survey.question}</div>
        <div
          style={{ "--width": answerOnePercentage }}
          className="survey-result-card"
        >
          <div className="survey-result-percentage">
            {parseFloat(answerOnePercentage).toFixed(2)}&#37;
          </div>
          <div className="survey-result-answer">{props.survey.answerOne}</div>
        </div>
        <div
          style={{ "--width": answerTwoPercentage }}
          className="survey-result-card"
        >
          <div className="survey-result-percentage">
            {parseFloat(answerTwoPercentage).toFixed(2)}&#37;
          </div>
          <div className="survey-result-answer">{props.survey.answerTwo}</div>
        </div>
        {props.survey.answerThree !== "" ? (
          <div
            style={{ "--width": answerThreePercentage }}
            className="survey-result-card"
          >
            <div className="survey-result-percentage">
              {parseFloat(answerThreePercentage).toFixed(2)}&#37;
            </div>
            <div className="survey-result-answer">
              {props.survey.answerThree}
            </div>
          </div>
        ) : (
          ""
        )}
        {props.survey.answerFour !== "" ? (
          <div
            style={{ "--width": answerFourPercentage }}
            className="survey-result-card"
          >
            <div className="survey-result-percentage">
              {parseFloat(answerFourPercentage).toFixed(2)}&#37;
            </div>
            <div className="survey-result-answer">
              {props.survey.answerFour}
            </div>
          </div>
        ) : (
          ""
        )}
        {props.survey.answerFive !== "" ? (
          <div
            style={{ "--width": answerFivePercentage }}
            className="survey-result-card"
          >
            <div className="survey-result-percentage">
              {parseFloat(answerFivePercentage).toFixed(2)}&#37;
            </div>
            <div className="survey-result-answer">
              {props.survey.answerFive}
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="survey-buttons">
          <button className="btn disabled survey-btn survey-btn-filled">
            Glasaj
          </button>
          <button
            onClick={handleChangeDisplayResults}
            className="survey-btn survey-btn-empty"
          >
            Nazad
          </button>
        </div>
      </div>
    </>
  );
};

export default SurveyResults;
