import React from "react";

const SearchComponent = ({ name, setName, handleSubmit }) => {
  return (
    <div className="py-4">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center sm:justify-start"
      >
        <label>
          <input
            className="pl-4 py-2 rounded-full text-lg border border-black"
            type="text"
            placeholder="Name of the town"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <button className="border-2 border-sky-400 transition duration-100 hover:border-sky-500 cursor-pointer ml-2 bg-sky-300 hover:bg-sky-400 rounded-full">
          <span className="m-1 material-symbols-outlined w-8 h-8 text-2xl">
            search
          </span>
        </button>
      </form>
    </div>
  );
};

export default SearchComponent;
