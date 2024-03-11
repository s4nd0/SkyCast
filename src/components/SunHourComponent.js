import React from "react";

// components
import Icon from "./Icon";

// icons
import wbTwilight from "../images/wbTwilight.svg";

const SunHourComponent = ({ forecast, sunrise }) => {
  return (
    <div className="flex flex-col items-center mx-3">
      {sunrise ? (
        <>
          <p className="text-gray-200 text-sm mb-2">
            {forecast.daily.sunrise[0].slice(11)}
          </p>
          <Icon src={wbTwilight} alt={"wb-twilight-icon"} />
          <p className="my-2">Sunrise</p>
        </>
      ) : (
        <>
          <p className="text-gray-200 text-sm mb-2">
            {forecast.daily.sunset[0].slice(11)}
          </p>
          <Icon src={wbTwilight} alt={"wb-twilight-icon"} />
          <p className="my-2">Sunset</p>
        </>
      )}
    </div>
  );
};

export default SunHourComponent;
