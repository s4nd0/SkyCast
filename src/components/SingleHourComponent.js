import React from "react";

const SingleHourComponent = ({ item, index, forecast }) => {
  const nowHour = new Date().getHours() + 1;

  const handleHour = () => {
    if (index + nowHour > 23) {
      return index + nowHour - 24;
    } else return index + nowHour;
  };

  const handleClouds = (clouds) => {
    if (clouds < 33) {
      return (
        <span className="material-symbols-outlined text-amber-400">
          wb_sunny
        </span>
      );
    } else if (clouds < 66) {
      return (
        <span className="material-symbols-outlined text-indigo-400">
          partly_cloudy_day
        </span>
      );
    } else {
      return (
        <span className="material-symbols-outlined text-blue-400">cloud</span>
      );
    }
  };
  return (
    <div className="flex flex-col items-center mx-3">
      <p className="text-gray-200 text-sm mb-2">{handleHour()}:00</p>
      {handleClouds(forecast.hourly.cloud_cover[index + nowHour])}
      <p className="my-2 text-lg">{Number(item).toFixed()}°</p>
      <p className="text-gray-200 text-sm flex flex-row items-center">
        <span className="material-symbols-outlined text-sm">humidity_high</span>
        <span>
          {forecast.hourly.precipitation_probability[index + nowHour]}%
        </span>
      </p>
    </div>
  );
};

export default SingleHourComponent;
