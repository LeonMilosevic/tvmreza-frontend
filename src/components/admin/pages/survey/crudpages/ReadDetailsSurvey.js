import React, { useState, useEffect } from "react";
// import helpers
import { useLocation } from "react-router-dom";
import {
  calculatePercentage,
  addSumOfAllAnswers,
} from "../../../../utils/PercentageCalculator";
// import comopnents
import AdminNavbar from "../../../dashboard/AdminNavbar";
import AdminManagementNavbar from "../../../dashboard/AdminManagementNavbar";
import CrudTab from "../../../dashboard/CrudTab";

/**
 * Read details Survey component
 *
 * we init empty survey state, populate it from location so we dont have to make a query call,
 * we init totalVotes state to help us calculate percentage per answer
 * we init each answer with a starting value of 0
 *
 */
const ReadDetailsSurvey = () => {
  const [survey, setSurvey] = useState({});
  const [totalVotes, setTotalVotes] = useState("0");
  const [answerOnePercentage, setAnswerOnePercentage] = useState("0");
  const [answerTwoPercentage, setAnswerTwoPercentage] = useState("0");
  const [answerThreePercentage, setAnswerThreePercentage] = useState("0");
  const [answerFourPercentage, setAnswerFourPercentage] = useState("0");
  const [answerFivePercentage, setAnswerFivePercentage] = useState("0");

  let location = useLocation();

  useEffect(() => {
    setSurvey(location.state);
  }, [location]);

  useEffect(() => {
    if (survey.answerOneCount !== undefined) {
      setTotalVotes(
        addSumOfAllAnswers(
          survey.answerOneCount,
          survey.answerTwoCount,
          survey.answerThreeCount,
          survey.answerFourCount,
          survey.answerFiveCount
        )
      );
    }
  }, [
    survey.answerOneCount,
    survey.answerTwoCount,
    survey.answerThreeCount,
    survey.answerFourCount,
    survey.answerFiveCount,
  ]);

  useEffect(() => {
    setAnswerOnePercentage(
      calculatePercentage(survey.answerOneCount, totalVotes)
    );
    setAnswerTwoPercentage(
      calculatePercentage(survey.answerTwoCount, totalVotes)
    );
    setAnswerThreePercentage(
      calculatePercentage(survey.answerThreeCount, totalVotes)
    );
    setAnswerFourPercentage(
      calculatePercentage(survey.answerFourCount, totalVotes)
    );
    setAnswerFivePercentage(
      calculatePercentage(survey.answerFiveCount, totalVotes)
    );
  }, [
    survey.answerOneCount,
    survey.answerTwoCount,
    survey.answerThreeCount,
    survey.answerFourCount,
    survey.answerFiveCount,
    totalVotes,
  ]);

  const readDetailsSurveyForm = () => (
    <>
      {survey && (
        <>
          <div className="row">
            <div className="col m12 s12">
              <table className="highlight">
                <thead>
                  <tr>
                    <th>Pitanje</th>
                    <th>Broj glasova</th>
                    <th>Procenat</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>{survey.answerOne}</td>
                    <td>
                      {survey.answerOneCount === null
                        ? "0"
                        : survey.answerOneCount}
                    </td>
                    <td>{answerOnePercentage.toString().slice(0, 5)}%</td>
                  </tr>
                  <tr>
                    <td>{survey.answerTwo}</td>
                    <td>
                      {survey.answerTwoCount === null
                        ? "0"
                        : survey.answerTwoCount}
                    </td>
                    <td>{answerTwoPercentage.toString().slice(0, 5)}%</td>
                  </tr>
                  <tr>
                    <td>{survey.answerThree}</td>
                    <td>
                      {survey.answerThreeCount === null
                        ? "0"
                        : survey.answerThreeCount}
                    </td>
                    <td>{answerThreePercentage.toString().slice(0, 5)}%</td>
                  </tr>
                  <tr>
                    <td>{survey.answerFour}</td>
                    <td>
                      {survey.answerFourCount === null
                        ? "0"
                        : survey.answerFourCount}
                    </td>
                    <td>{answerFourPercentage.toString().slice(0, 5)}%</td>
                  </tr>
                  <tr>
                    <td>{survey.answerFive}</td>
                    <td>
                      {survey.answerFiveCount === null
                        ? "0"
                        : survey.answerFiveCount}
                    </td>
                    <td>{answerFivePercentage.toString().slice(0, 5)}%</td>
                  </tr>
                  <tr>
                    <td>total</td>
                    <td>{totalVotes.toString().slice(0, 5)}</td>
                    <td>100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
      <div className="container">{readDetailsSurveyForm()}</div>
    </>
  );
};

export default ReadDetailsSurvey;
