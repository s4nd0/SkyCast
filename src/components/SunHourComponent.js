import React from "react";

const SunHourComponent = ({ item, index, forecast, sunrise }) => {
  return (
    <div className="flex flex-col items-center mx-3">
      {sunrise ? (
        <>
          <p className="text-gray-200 text-sm mb-2">
            {forecast.daily.sunrise[0].slice(11)}
          </p>
          <span className="material-symbols-rounded text-yellow-200">
            wb_twilight
          </span>
          <p className="my-2">Sunrise</p>
        </>
      ) : (
        <>
          <p className="text-gray-200 text-sm mb-2">
            {forecast.daily.sunset[0].slice(11)}
          </p>
          <span className="material-symbols-rounded text-orange-400">
            wb_twilight
          </span>
          <p className="my-2">Sunset</p>
        </>
      )}
    </div>
  );
};

export default SunHourComponent;
