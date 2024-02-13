import React, { useEffect, useState } from "react";

const WeatherComponent = ({ forecast }) => {
  const [temperatureList, setTemperatureList] = useState(null);
  const [hoursNumber, setHoursNumber] = useState(24);

  useEffect(() => {
    if (forecast) {
      setTemperatureList(
        forecast.hourly.temperature_2m
          .slice(0, hoursNumber)
          .map((temperature, index) => (
            <li key={index} className="py-2 px-4 my-2 rounded-xl bg-sky-300">
              {forecast.hourly.time[index].slice(-5)}: <b>{temperature} °C</b>
            </li>
          ))
      );
    }
  }, [forecast]);

  return (
    <div>
      <p className="text-center text-xl">Forecast:</p>
      <ul className="p-4">{forecast && temperatureList}</ul>
    </div>
  );
};

export default WeatherComponent;
