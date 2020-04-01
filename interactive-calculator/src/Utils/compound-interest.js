export const calcCompoundInterest = (
  principalAmount,
  interestRatePercent,
  timesCompoundedPerPeriod,
  numberOfPeriods
) => {
  const principalAmountInCents = principalAmount * 100;
  const rateAsDecimal = interestRatePercent / 100;
  const timesToCalculate = timesCompoundedPerPeriod * numberOfPeriods;
  const finalSavings = Math.floor(
    principalAmountInCents *
      Math.pow(1 + rateAsDecimal / timesCompoundedPerPeriod, timesToCalculate)
  );

  return finalSavings / 100;
};

export const mapSavingsToObject = (
  label,
  principalAmount,
  interestRatePercent,
  timesCompoundedPerPeriod,
  numberOfPeriods
) => {
  const num = 10;
  let arrayData = Array(num);
  arrayData = [1, 2, 3].map(x => {
    const finalValue = calcCompoundInterest(
      principalAmount,
      interestRatePercent,
      timesCompoundedPerPeriod,
      x
    );
    return [x, finalValue];
  });

  const obj = {
    label: label,
    data: arrayData
  };
  return obj;
};
