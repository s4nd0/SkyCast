import React from "react";

const DetailComponent = ({ icon, title, content }) => {
  return (
    <div className="bg-sky-800/25 p-4 rounded-2xl">
      <div className="flex flex-row items-center text-gray-300 ">
        <span className="material-symbols-outlined">{icon}</span>
        <p className="ml-1">{title}</p>
      </div>
      <div className="mt-2 text-xl">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default DetailComponent;
