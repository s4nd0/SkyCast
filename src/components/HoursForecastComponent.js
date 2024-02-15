import React, { useEffect } from "react";
import SingleHourComponent from "./SingleHourComponent";

const HoursForecastComponent = ({ forecast }) => {
  const nowHour = new Date().getHours();
  const clouds24 = forecast.hourly.cloud_cover.slice(1 + nowHour, 25 + nowHour);
  var sum = 0;
  clouds24.forEach((element) => {
    sum += element;
  });
  const avg = (sum / 24).toFixed();
  console.log("clouds: ", clouds24);

  return (
    <div className="bg-sky-800/25 p-4 rounded-2xl">
      <div className="flex flex-row items-center text-gray-300 border-b border-blue-400 pb-2">
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
      <div className="overflow-x-auto overflow-y-hidden pb-4 whitespace-nowrap scrollbar-thumb-blue-500 scrollbar-thin scrollbar-track-blue-300 scrollbar-track-rounded-full scrollbar-thumb-rounded-full">
        <div className="inline-block h-full">
          <div className="w-full mt-1 flex flex-row items-center justify-center">
            {forecast.hourly.temperature_2m
              .slice(nowHour + 1, 25 + nowHour)
              .map((item, index) => {
                return (
                  <SingleHourComponent
                    key={index}
                    item={item}
                    index={index}
                    forecast={forecast}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoursForecastComponent;
