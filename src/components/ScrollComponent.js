import React, { useRef } from "react";

const ScrollComponent = ({ forecast }) => {
  const handleSunTitle = (is_day) => {
    if (is_day) {
      return (
        <>
          <span className="material-symbols-outlined">nights_stay</span>
          <p className="ml-1">Time to sleep</p>
        </>
      );
    } else {
      return (
        <>
          <span className="material-symbols-outlined">wb_sunny</span>
          <p className="ml-1">Time to get up</p>
        </>
      );
    }
  };

  const handleSunContent = (is_day) => {
    if (is_day) {
      return `Sunset today at: ${forecast.daily.sunset[0].slice(11)}`;
    } else {
      return `Sunrise tomorrow at: ${forecast.daily.sunrise[1].slice(11)}`;
    }
  };

  const handleTemperature = (temperature) => {
    const arr = temperature.slice(24, 48);
    let total = 0;
    arr.forEach((element) => {
      total += element;
    });
    const avg = total / 24;
    const today = forecast.current.temperature_2m;
    if (avg > today) {
      return `little warmer than today: ${avg.toFixed()}°`;
    } else {
      return `little colder than today: ${avg.toFixed()}°`;
    }
  };

  return (
    <div className="bg-sky-800/25 pt-4 pb-2 px-4 rounded-2xl my-4 ">
      <div className="overflow-x-auto overflow-y-hidden whitespace-nowrap snap-x snap-mandatory no-scrollbar">
        <div className="inline-block w-full snap-center snap-always mr-8 h-full">
          <div className="flex flex-col ">
            <div>
              <div className="flex flex-row items-center text-gray-300 ">
                {handleSunTitle(forecast.current.is_day)}
              </div>
              <div className="mt-2 text-lg overflow-hidden">
                <p>{handleSunContent(forecast.current.is_day)}</p>
              </div>
            </div>
            <div className="w-full mt-1 flex flex-row items-center justify-center">
              <span className="material-symbols-outlined text-sm mr-1">
                circle
              </span>
              <span className="material-symbols-outlined text-sm text-slate-50/25">
                circle
              </span>
            </div>
          </div>
        </div>

        <div className="inline-block w-full snap-always snap-center h-full">
          <div className="flex flex-col ">
            <div>
              <div className="flex flex-row items-center text-gray-300 ">
                <span className="material-symbols-outlined">thermometer</span>
                <p className="ml-1">Tommorow's temperature</p>
              </div>
              <div className="mt-2 text-lg overflow-hidden">
                <p>{handleTemperature(forecast.hourly.temperature_2m)}</p>
              </div>
            </div>
            <div className="w-full mt-1 flex flex-row items-center justify-center">
              <span className="material-symbols-outlined text-sm text-slate-50/25 mr-1">
                circle
              </span>
              <span className="material-symbols-outlined text-sm">circle</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollComponent;
