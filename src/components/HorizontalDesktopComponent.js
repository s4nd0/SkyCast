import React from "react";
import DetailComponent from "./DetailComponent";

const HorizontalDesktopComponent = ({ forecast }) => {
  const isDay = forecast.current.is_day;

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
    <>
      <DetailComponent
        icon={isDay ? "wb_sunny" : "nights_stay"}
        title={isDay ? "Time to sleep" : "Time to get up"}
        content={
          isDay
            ? `Sunset today at: ${forecast.daily.sunset[0].slice(11)}`
            : `Sunrise tomorrow at: ${forecast.daily.sunrise[1].slice(11)}`
        }
      />
      <DetailComponent
        icon={"thermometer"}
        title={"Tommorow's temperature"}
        content={handleTemperature(forecast.hourly.temperature_2m)}
      />
    </>
  );
};

export default HorizontalDesktopComponent;
