import React from "react";
import SingleDailyComponent from "./SingleDailyComponent";

const DailyForecastComponent = ({ forecast }) => {
  return (
    <div className="bg-sky-800/25 p-4 rounded-2xl overflow-hidden box-border">
      {forecast.daily.precipitation_probability_max.map((item, index) => (
        <SingleDailyComponent
          key={index}
          index={index}
          item={item}
          forecast={forecast}
        />
      ))}
    </div>
  );
};

export default DailyForecastComponent;
