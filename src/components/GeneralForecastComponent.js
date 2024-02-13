import React, { useEffect } from "react";

import { useForecast } from "../hooks/useForecast";
import LoadingComponent from "./LoadingComponent";
import ErrorText from "./ErrorText";

const GeneralForecastComponent = ({ town }) => {
  const { generalForecast, isPending, forecast, error } = useForecast();
  const nowHour = new Date().getHours();

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
    if (town) {
      generalForecast(town);
    }
  }, [town]);

  useEffect(() => {
    console.log(forecast);
  }, [forecast]);

  return (
    <div className="my-4 p-4 h-fit box-border font-signika">
      {isPending ? (
        <LoadingComponent />
      ) : (
        forecast && (
          <>
            <div className="grid grid-cols-2">
              <div>
                <p className="text-2xl flex flex-row items-center">
                  {town}{" "}
                  <span className="material-symbols-outlined ml-2">
                    location_on
                  </span>
                </p>
                <p className="text-8xl">
                  {Number(forecast.hourly.temperature_2m[nowHour]).toFixed()}°
                </p>
                <p className="mt-2 text-lg">
                  {checkClouds(forecast.hourly.cloud_cover[nowHour])}
                </p>
              </div>
              <div className="flex justify-center items-center">
                <span className="material-symbols-outlined text-7xl">
                  {forecast.hourly.cloud_cover[nowHour] <= 33
                    ? "wb_sunny"
                    : forecast.hourly.cloud_cover[nowHour] > 66
                    ? "cloud"
                    : "partly_cloudy_day"}
                </span>
              </div>
            </div>
            <p className="mt-4 text-lg">
              {Math.max(
                ...forecast.hourly.temperature_2m.slice(0, 24)
              ).toFixed()}
              ° /{" "}
              {Math.min(
                ...forecast.hourly.temperature_2m.slice(0, 24)
              ).toFixed()}
              ° Perceptible{" "}
              {Number(forecast.hourly.apparent_temperature[nowHour]).toFixed()}°
            </p>
          </>
        )
      )}
      {error && <ErrorText text={error} />}
    </div>
  );
};

export default GeneralForecastComponent;
