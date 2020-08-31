export const calculatePercentage = (numberToBeEvaluated, total) => {
  let totalPercentage = (numberToBeEvaluated / total) * 100;
  return totalPercentage;
};

export const addSumOfAllAnswers = (num1, num2, num3, num4, num5) => {
  let total = 0;

  total = num1 + num2 + num3 + num4 + num5;

  return total;
};
