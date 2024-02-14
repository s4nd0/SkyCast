import React from "react";

// images
import WeatherLogo from "../images/weather-logo.png";

const Header = () => {
  return (
    <header className="py-4 max-w-5xl w-full mx-auto flex flex-row justify-center items-center sm:justify-start sm:ml-4">
      <img
        className="w-14 drop-shadow-lg "
        src={WeatherLogo}
        alt="weather-logo"
      />
      <p className="title ml-2 sm:ml-4 text-3xl sm:text-5xl font-bold font-josefin drop-shadow-lg">
        SkyCast
      </p>
    </header>
  );
};

export default Header;
