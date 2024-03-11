import React, { useEffect } from "react";

// icons
import locationOn from "../images/locationOn.svg";
import wbSunny from "../images/wbSunny.svg";
import nightsStay from "../images/nightsStay.svg";

// components
import Icon from "./Icon";
import IconMain from "./IconMain";

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

  return (
    <div className="p-4 h-fit box-border font-signika">
      <>
        <p className="text-2xl flex flex-row items-center">
          {enabledLocation ? userTown : town}{" "}
          <span className="ml-2">
            <Icon src={locationOn} alt={"location-on-icon"} />
          </span>
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
              {forecast.current.is_day ? (
                <IconMain src={wbSunny} alt={"wb-sunny-icon"} />
              ) : (
                <IconMain src={nightsStay} alt={"nights-stay-icon"} />
              )}
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
