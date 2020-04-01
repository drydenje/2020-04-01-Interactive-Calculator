import React from "react";
import { Chart } from "react-charts";
import { mapSavingsToObject } from "../Utils/compound-interest";

export default function MyChart() {
  const principalAmount = 10000;
  const interestRatePercent = 10;
  const timesCompoundedPerPeriod = 1;
  const numberOfPeriods = 5;
  const seriesLabel = "My Savings";

  const data = React.useMemo(() => [
    mapSavingsToObject(
      seriesLabel,
      principalAmount,
      interestRatePercent,
      timesCompoundedPerPeriod,
      numberOfPeriods
    )
  ]);

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" }
    ],
    []
  );

  return (
    <div
      style={{
        width: "80vw",
        height: "300px"
      }}
    >
      <Chart data={data} axes={axes} />
    </div>
  );
}
