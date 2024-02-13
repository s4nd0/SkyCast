import { useState } from "react";

export const useForecast = () => {
  const [forecast, setForecast] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const generalForecast = async (name) => {
    setError(null);
    setIsPending(true);
    try {
      const { lng, lat } = await townPosition(name);
      if (!lng || !lat) {
        throw "No such data!";
      }
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,rain,pressure_msl,cloud_cover,visibility,wind_speed_10m,wind_direction_10m`
      );
      const data = await res.json();
      setIsPending(false);
      setError(null);
      setForecast(data);
    } catch (err) {
      console.log(err);
      setError(err);
      setForecast(null);
      setIsPending(false);
    }
  };

  const townPosition = async (name) => {
    try {
      setError(null);
      do {
        const res = await fetch(`https://geocode.xyz/${name}?json=1`);
        var data = await res.json();
      } while (data.city === "Throttled! See geocode.xyz/pricing");
      if (!data) {
        throw { message: "No such data!" };
      }
      if (data.city === "Throttled! See geocode.xyz/pricing") {
        throw { message: "API closed" };
      }
      if (data.error) {
        throw { message: data.error.description };
      }
      return { lng: data.longt, lat: data.latt };
    } catch (err) {
      setError(err.message);
      return { lng: null, lat: null };
    }
  };

  return { forecast, isPending, error, generalForecast };
};
