import { calcCompoundInterest, mapSavingsToObject } from "./compound-interest";

test("generates an object to use on the chart", () => {
  const principalAmount = 10000;
  const interestRatePercent = 10;
  const timesCompoundedPerPeriod = 1;
  const numberOfPeriods = 1;
  const seriesLabel = "My Label";

  const finalValue = mapSavingsToObject(
    seriesLabel,
    principalAmount,
    interestRatePercent,
    timesCompoundedPerPeriod,
    numberOfPeriods
  );
  expect(finalValue).toEqual({
    label: "My Label",
    data: [
      [1, 11000],
      [2, 12100],
      [3, 13310]
    ]
  });
});

test("calculates the end balance after interest earned over one year", () => {
  const principalAmount = 10000;
  const interestRatePercent = 10;
  const timesCompoundedPerPeriod = 1;
  const numberOfPeriods = 1;

  const finalValue = calcCompoundInterest(
    principalAmount,
    interestRatePercent,
    timesCompoundedPerPeriod,
    numberOfPeriods
  );

  expect(finalValue).toEqual(11000);
});

test("calculates the end balance after interest earned over two years", () => {
  const principalAmount = 10000;
  const interestRatePercent = 10;
  const timesCompoundedPerPeriod = 1;
  const numberOfPeriods = 2;

  const finalValue = calcCompoundInterest(
    principalAmount,
    interestRatePercent,
    timesCompoundedPerPeriod,
    numberOfPeriods
  );

  expect(finalValue).toEqual(12100);
});

test("calculates the end balance after interest earned over three years", () => {
  const principalAmount = 10000;
  const interestRatePercent = 10;
  const timesCompoundedPerPeriod = 1;
  const numberOfPeriods = 3;

  const finalValue = calcCompoundInterest(
    principalAmount,
    interestRatePercent,
    timesCompoundedPerPeriod,
    numberOfPeriods
  );

  expect(finalValue).toEqual(13310);
});

test("calculates the end balance after interest earned over four years", () => {
  const principalAmount = 10000;
  const interestRatePercent = 10;
  const timesCompoundedPerPeriod = 1;
  const numberOfPeriods = 4;

  const finalValue = calcCompoundInterest(
    principalAmount,
    interestRatePercent,
    timesCompoundedPerPeriod,
    numberOfPeriods
  );

  expect(finalValue).toEqual(14641);
});

test("calculates the end balance after interest earned over five years", () => {
  const principalAmount = 10000;
  const interestRatePercent = 10;
  const timesCompoundedPerPeriod = 1;
  const numberOfPeriods = 5;

  const finalValue = calcCompoundInterest(
    principalAmount,
    interestRatePercent,
    timesCompoundedPerPeriod,
    numberOfPeriods
  );

  expect(finalValue).toEqual(16105.1);
});
