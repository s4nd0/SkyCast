import React from "react";

const IconSmall = ({ src, alt, dark = false }) => {
  return (
    <>
      <img
        src={src}
        alt={alt}
        className={dark ? `invert-75 w-4` : `invert w-4`}
      />
    </>
  );
};

export default IconSmall;
