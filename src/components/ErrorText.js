import React from "react";

const ErrorText = ({ text }) => {
  return (
    <div className="w-full">
      <p className="text-red-700 font-bold text-center">{text}</p>
    </div>
  );
};

export default ErrorText;
