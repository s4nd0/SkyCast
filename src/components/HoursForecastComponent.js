import React, { useEffect } from "react";
import SingleHourComponent from "./SingleHourComponent";
import SunHourComponent from "./SunHourComponent";

const HoursForecastComponent = ({ forecast }) => {
  const nowHour = new Date().getHours();
  const clouds24 = forecast.hourly.cloud_cover.slice(1 + nowHour, 25 + nowHour);
  var sum = 0;
  clouds24.forEach((element) => {
    sum += element;
  });
  const avg = (sum / 24).toFixed();

  return (
    <div className="bg-sky-800/25 p-4 rounded-2xl">
      <div className="flex flex-row items-center text-gray-200 border-b border-blue-400 pb-2">
        <span className="material-symbols-outlined">update</span>
        <p className="ml-1">
          {avg < 33
            ? "Mostly clear sky"
            : avg < 66
            ? "Partly cloudy"
            : "significantly cloudy"}{" "}
          for the next 24 hours
        </p>
      </div>
      <div className="overflow-x-auto overflow-y-hidden pb-4 whitespace-nowrap scrollbar-thumb-blue-300 scrollbar-thin scrollbar-track-blue-500 scrollbar-track-rounded-full scrollbar-thumb-rounded-full">
        <div className="inline-block h-full">
          <div className="w-full mt-1 flex flex-row items-start justify-center">
            {forecast.hourly.temperature_2m
              .slice(nowHour + 1, 25 + nowHour)
              .map((item, index) => {
                return (
                  <div className="flex flex-row" key={index}>
                    <SingleHourComponent
                      item={item}
                      index={index}
                      forecast={forecast}
                    />
                    {(nowHour + index > 24
                      ? nowHour + index - 24 + 1
                      : nowHour + index + 1) ===
                      Number(forecast.daily.sunrise[0].slice(11, 13)) && (
                      <SunHourComponent sunrise={true} forecast={forecast} />
                    )}
                    {(nowHour + index > 24
                      ? nowHour + index - 24 + 1
                      : nowHour + index + 1) ===
                      Number(forecast.daily.sunset[0].slice(11, 13)) && (
                      <SunHourComponent sunrise={false} forecast={forecast} />
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoursForecastComponent;
