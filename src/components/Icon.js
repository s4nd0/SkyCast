import React from "react";

const Icon = ({ src, alt, dark = false }) => {
  return (
    <>
      <img src={src} alt={alt} className={dark ? `invert-75` : `invert`} />
    </>
  );
};

export default Icon;
