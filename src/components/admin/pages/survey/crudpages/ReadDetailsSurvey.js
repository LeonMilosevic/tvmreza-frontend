import React, { useState, useEffect } from "react";
// import helpers
import { useLocation } from "react-router-dom";
import { calculatePercentage } from "../../../../utils/PercentageCalculator";
// import comopnents
import AdminNavbar from "../../../dashboard/AdminNavbar";
import AdminManagementNavbar from "../../../dashboard/AdminManagementNavbar";
import CrudTab from "../../../dashboard/CrudTab";

const ReadDetailsSurvey = () => {
  const [survey, setSurvey] = useState({});
  const [totalVotes, setTotalVotes] = useState("0");
  const [answerOnePercentage, setAnswerOnePercentage] = useState("0");
  const [answerTwoPercecntage, setAnswerTwoPercecntage] = useState("0");
  const [answerThreePercecntage, setAnswerThreePercecntage] = useState("0");
  const [answerFourPercecntage, setAnswerFourPercecntage] = useState("0");
  const [answerFivePercecntage, setAnswerFivePercecntage] = useState("0");

  let location = useLocation();

  useEffect(() => {
    setSurvey(location.state);
  }, [location]);

  useEffect(() => {
    if (survey.answerOneCount !== undefined) {
      addSumOfAllAnswers();
      calculatePercentageForEachAnswer();
    }
  }, [survey, totalVotes]);

  const addSumOfAllAnswers = () => {
    const total =
      survey.answerOneCount +
      survey.answerTwoCount +
      survey.answerThreeCount +
      survey.answerFourCount +
      survey.answerFiveCount;

    setTotalVotes(total);
  };

  const calculatePercentageForEachAnswer = () => {
    let answerOneCount = survey.answerOneCount;
    let answerTwoCount = survey.answerTwoCount;
    let answerThreeCount = survey.answerThreeCount;
    let answerFourCount = survey.answerFourCount;
    let answerFiveCount = survey.answerFiveCount;

    if (answerOneCount !== undefined) {
      if (answerOneCount !== null) {
        let answerOnePercentageTemp = calculatePercentage(
          answerOneCount,
          totalVotes
        );
        setAnswerOnePercentage(answerOnePercentageTemp);
      }
      if (answerTwoCount !== null) {
        let answerTwoPercentageTemp = calculatePercentage(
          answerTwoCount,
          totalVotes
        );
        setAnswerTwoPercecntage(answerTwoPercentageTemp);
      }
      if (answerThreeCount !== null) {
        let answerThreePercentageTemp = calculatePercentage(
          answerThreeCount,
          totalVotes
        );
        setAnswerThreePercecntage(answerThreePercentageTemp);
      }
      if (answerFourCount !== null) {
        let answerFourPercentageTemp = calculatePercentage(
          answerFourCount,
          totalVotes
        );
        setAnswerFourPercecntage(answerFourPercentageTemp);
      }

      if (answerFiveCount !== null) {
        let answerFivePercentageTemp = calculatePercentage(
          answerFiveCount,
          totalVotes
        );
        setAnswerFivePercecntage(answerFivePercentageTemp);
      }
    }
  };

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
                    <td>{answerTwoPercecntage.toString().slice(0, 5)}%</td>
                  </tr>
                  <tr>
                    <td>{survey.answerThree}</td>
                    <td>
                      {survey.answerThreeCount === null
                        ? "0"
                        : survey.answerThreeCount}
                    </td>
                    <td>{answerThreePercecntage.toString().slice(0, 5)}%</td>
                  </tr>
                  <tr>
                    <td>{survey.answerFour}</td>
                    <td>
                      {survey.answerFourCount === null
                        ? "0"
                        : survey.answerFourCount}
                    </td>
                    <td>{answerFourPercecntage.toString().slice(0, 5)}%</td>
                  </tr>
                  <tr>
                    <td>{survey.answerFive}</td>
                    <td>
                      {survey.answerFiveCount === null
                        ? "0"
                        : survey.answerFiveCount}
                    </td>
                    <td>{answerFivePercecntage.toString().slice(0, 5)}%</td>
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
