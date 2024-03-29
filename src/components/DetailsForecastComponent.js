import React, { useEffect, useState } from "react";

// icons
import air from "../images/air.svg";
import north from "../images/north.svg";
import humidityPercentage from "../images/humidityPercentage.svg";
import compareArrows from "../images/compareArrows.svg";
import wbSunny from "../images/wbSunny.svg";
import partlyCloudyDay from "../images/PartlyCloudyDay.svg";
import visibility from "../images/visibility.svg";

// components
import DetailComponent from "./DetailComponent";
import Icon from "./Icon";

const DetailsForecastComponent = ({ forecast }) => {
  const [rotation, setRotation] = useState("");
  const nowHour = new Date().getHours();

  useEffect(() => {
    setRotation(forecast.current.wind_direction_10m);
  }, [forecast]);

  const handleUV = (uv) => {
    if (uv <= 2.5) {
      return "Low";
    } else if (uv > 2.5 && uv <= 5) {
      return "Medium";
    } else if (uv > 5 && uv <= 7.5) {
      return "High";
    } else if (uv > 7.5 && uv <= 10) {
      return "Very high";
    } else if (uv > 10) {
      return "Extreme";
    }
  };

  return (
    <div className="p-1 mt-1 h-fit box-border font-signika grid grid-cols-2 gap-4">
      <div className="bg-sky-800/25 p-4 rounded-2xl">
        <div className="flex flex-row items-center text-gray-300">
          <Icon src={air} alt={"air-icon"} dark={true} />
          <p className="ml-1">Wind</p>
        </div>
        <div className="flex flex-row items-center mt-2 text-xl">
          {rotation && (
            <span
              style={{ transform: `rotate(${rotation}deg)` }}
              className={`material-symbols-outlined`}
            >
              <Icon src={north} alt={"north-icon"} />
            </span>
          )}
          <p className="ml-3">{forecast.current.wind_speed_10m} km/h</p>
        </div>
      </div>
      <DetailComponent
        icon={humidityPercentage}
        title={"Humidity"}
        content={`${forecast.current.relative_humidity_2m} %`}
      />
      <DetailComponent
        icon={compareArrows}
        title={"Pressure"}
        content={`${forecast.current.surface_pressure} hPa`}
      />
      <DetailComponent
        icon={wbSunny}
        title={"Index UV"}
        content={handleUV(Number(forecast.daily.uv_index_max[0]))}
      />
      <DetailComponent
        icon={partlyCloudyDay}
        title={"Clouds"}
        content={`${forecast.current.cloud_cover} %`}
      />
      <DetailComponent
        icon={visibility}
        title={"Visibility"}
        content={`${Number(
          forecast.hourly.visibility[nowHour] / 1000
        ).toFixed()} km`}
      />
    </div>
  );
};

export default DetailsForecastComponent;
