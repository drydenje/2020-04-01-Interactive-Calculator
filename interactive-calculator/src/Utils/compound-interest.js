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

// export const mapSavingsToObject = (label,principalAmount,
//   interestRatePercent,
//   timesCompoundedPerPeriod,
//   numberOfPeriods ) => {

//   const data = [[...Array(10).keys(),1].map(x=>++x),1];
//   const
// }
