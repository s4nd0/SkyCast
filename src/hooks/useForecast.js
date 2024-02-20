import { useCallback, useState } from "react";

export const useForecast = () => {
  const [forecast, setForecast] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [enabledLocation, setEnabledLocation] = useState(true);
  const [userTown, setUserTown] = useState(null);

  const generalForecast = async (name) => {
    setEnabledLocation(false);
    setError(null);
    setIsPending(true);
    try {
      const { lng, lat } = await townPosition(name);
      if (!lng || !lat) {
        throw "No such data!";
      }
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,weather_code,cloud_cover,surface_pressure,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,rain,pressure_msl,surface_pressure,cloud_cover,visibility,wind_speed_10m,wind_direction_10m&daily=sunrise,sunset,uv_index_max,rain_sum,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=Europe%2FBerlin`
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

  const generalForecastUserLocation = async (lat, lng) => {
    setError(null);
    setIsPending(true);
    try {
      if (!lng || !lat) {
        throw "No such data!";
      }
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,weather_code,cloud_cover,surface_pressure,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,rain,pressure_msl,surface_pressure,cloud_cover,visibility,wind_speed_10m,wind_direction_10m&daily=sunrise,sunset,uv_index_max,rain_sum,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=Europe%2FBerlin`
      );
      const data = await res.json();
      setIsPending(false);
      setError(null);
      setForecast(data);
    } catch (err) {
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

  const getUserTown = async (lat, lng) => {
    try {
      do {
        const res = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
        var data = await res.json();
        if (data.city !== "Throttled! See geocode.xyz/pricing")
          setUserTown(data.city);
        console.log(data);
      } while (data.city === "Throttled! See geocode.xyz/pricing");
    } catch (err) {
      console.log(err.message);
    }
  };

  console.log(userTown);

  // getting user position
  const getPosition = function () {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(position);
        },
        (err) => reject(err)
      );
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  // function for setting a user position on start
  const onMount = async () => {
    try {
      setIsPending(true);
      const pos = await getPosition();
      const { latitude: lat, longitude: lng } = pos.coords;
      await getUserTown(lat, lng);
      await generalForecastUserLocation(lat, lng);
      setIsPending(false);
    } catch (err) {
      generalForecast("Warsaw");
      setEnabledLocation(false);
      setIsPending(false);
    }
  };

  return {
    forecast,
    isPending,
    error,
    generalForecast,
    onMount,
    enabledLocation,
    userTown,
  };
};
