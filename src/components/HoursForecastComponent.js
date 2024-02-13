import React, { useEffect } from "react";

import { useForecast } from "../hooks/useForecast";

const HoursForecastComponent = ({ town }) => {
  const { generalForecast, isPending, forecast, error } = useForecast();

  useEffect(() => {
    if (town) {
      generalForecast(town);
    }
  }, [town]);
  console.log("Hours forecast: ", forecast);
  console.log("Hours error: ", error);
  return <div>Hours forecast component</div>;
};

export default HoursForecastComponent;
