import React, { useEffect } from "react";

const GeneralForecastComponent = ({
  town,
  forecast,
  enabledLocation,
  userTown,
}) => {
  const checkClouds = (clouds) => {
    if (clouds >= 0 && clouds <= 10) {
      return "Clear sky";
    } else if (clouds > 10 && clouds <= 25) {
      return "Lightly cloudy";
    } else if (clouds > 25 && clouds <= 50) {
      return "Medium cloudy";
    } else if (clouds > 50 && clouds <= 70) {
      return "Quite cloudy";
    } else if (clouds > 70 && clouds <= 90) {
      return "Very cloudy";
    } else if (clouds > 90 && clouds <= 100) {
      return "Completely cloudy";
    } else {
      return `I don't know :/`;
    }
  };

  useEffect(() => {
    console.log(forecast);
  }, [forecast]);

  return (
    <div className="p-4 h-fit box-border font-signika">
      <>
        <p className="text-2xl flex flex-row items-center">
          {enabledLocation ? userTown : town}{" "}
          <span className="material-symbols-outlined ml-2">location_on</span>
        </p>
        <div className="grid grid-cols-2">
          <div>
            <p className="text-8xl">
              {Number(forecast.current.temperature_2m).toFixed()}°
            </p>
            <p className="mt-2 text-lg">
              {checkClouds(forecast.current.cloud_cover)}
            </p>
          </div>
          <div className="flex justify-end items-center sm:justify-start">
            <span
              className={`material-symbols-outlined text-8xl ${
                forecast.current.is_day ? "text-amber-400" : "text-blue-700"
              } `}
            >
              {forecast.current.is_day ? "wb_sunny" : "nights_stay"}
            </span>
          </div>
        </div>
        <p className="mt-4 text-lg">
          {Math.max(...forecast.hourly.temperature_2m.slice(0, 24)).toFixed()}°
          / {Math.min(...forecast.hourly.temperature_2m.slice(0, 24)).toFixed()}
          ° Perceptible{" "}
          {Number(forecast.current.apparent_temperature).toFixed()}°
        </p>
      </>
    </div>
  );
};

export default GeneralForecastComponent;
