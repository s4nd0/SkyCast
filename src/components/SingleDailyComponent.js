import React from "react";

const SingleDailyComponent = ({ item, index, forecast }) => {
  const handleDay = (index) => {
    const today = new Date().getDay();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    if (index + today > 6) {
      return days[index + today - 7];
    } else {
      return days[index + today];
    }
  };

  return (
    <div className="flex flex-row items-center box-border">
      <p className="mr-auto">{index === 0 ? "Today" : handleDay(index)}</p>
      <div className="flex flex-row justify-between gap-4">
        <p className="text-gray-300 text-sm flex flex-row items-center">
          <span className="material-symbols-rounded text-sm">
            humidity_high
          </span>
          <span>{forecast.daily.precipitation_probability_max[index]}%</span>
        </p>
        <p className="text-gray-300 text-sm flex flex-row items-center w-14">
          <span>{Number(forecast.daily.rain_sum[index]).toFixed(1)} mm</span>
        </p>
        <p className="flex flex-row items-center text-lg w-14">
          <span className="mr-1">
            {Number(forecast.daily.temperature_2m_max[index]).toFixed()}°
          </span>
          <span>
            {Number(forecast.daily.temperature_2m_min[index]).toFixed()}°
          </span>
        </p>
      </div>
    </div>
  );
};

export default SingleDailyComponent;
