import React from "react";

// icons
import wbSunny from "../images/wbSunny.svg";
import partlyCloudyDay from "../images/PartlyCloudyDay.svg";
import cloud from "../images/cloud.svg";
import humidityHigh from "../images/humidityHigh.svg";

// components
import Icon from "./Icon";
import IconSmall from "./IconSmall";

const SingleHourComponent = ({ item, index, forecast }) => {
  const nowHour = new Date().getHours() + 1;

  const handleHour = () => {
    if (index + nowHour > 23) {
      return index + nowHour - 24;
    } else return index + nowHour;
  };

  const handleClouds = (clouds) => {
    if (clouds < 33) {
      return <Icon src={wbSunny} alt={"wb-sunny-icon"} />;
    } else if (clouds < 66) {
      return <Icon src={partlyCloudyDay} alt={"partly-cloudy-day-icon"} />;
    } else {
      return <Icon src={cloud} alt={"cloud-icon"} />;
    }
  };
  return (
    <div className="flex flex-col items-center mx-4">
      <p className="text-gray-200 text-sm mb-2">{handleHour()}:00</p>
      {handleClouds(forecast.hourly.cloud_cover[index + nowHour])}
      <p className="my-2 text-lg">{Number(item).toFixed()}°</p>
      <p className="text-gray-200 text-sm flex flex-row items-center justify-center">
        <IconSmall src={humidityHigh} alt={"humidity-high"} />
        <span>
          {forecast.hourly.precipitation_probability[index + nowHour]}%
        </span>
      </p>
    </div>
  );
};

export default SingleHourComponent;
