import React from "react";

const SearchComponent = ({ name, setName, handleSubmit }) => {
  return (
    <div className="py-4">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center sm:justify-start"
      >
        <label className="w-full">
          <input
            className="pl-4 bg-sky-800/25 py-2 rounded-full placeholder:text-gray-200 w-full"
            type="text"
            placeholder="Name of the town"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <button className="transition bg-sky-800/25 duration-100 cursor-pointer ml-2 rounded-full">
          <span className="m-1 material-symbols-outlined w-8 h-8 text-2xl">
            search
          </span>
        </button>
      </form>
    </div>
  );
};

export default SearchComponent;
