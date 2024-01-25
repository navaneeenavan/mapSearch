import React, { useState, useEffect } from "react";
import { AiFillExclamationCircle } from "react-icons/ai";

const Dropdown = ({
  valueState = ["", (v) => { }],
  errorState = ["", (v) => { }],
  placeholder = "",
  options = [],
  title = "",
  isDisabled = false,
  className = "w-full",
}) => {
  const [value, setValue] = valueState;
  const [error, setError] = errorState;

  useEffect(() => {
    if (value.length <= 0 && placeholder.length <= 0) {
      setValue(options[0]);
    }
  }, []);

  return (
    <div
      className={`${className} flex flex-col items-start justify-center font-poppins space-y-2 mb-2`}
    >
      <label className="text-blue text-sm -mb-5 ml-3 z-10 bg-white px-2">
        {title}
      </label>
      <div className="flex space-x-2 items-center w-full">
        <select
          disabled={isDisabled}
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            e.preventDefault();
            setValue(e.target.value);
            setError("");
          }}
          className={`px-4 h-12 py-2 pt-3 w-full rounded-lg text-slate bg-white bg-clip-padding bg-no-repeat border-2 border-solid ${
            error.length !== 0 ? "border-yellow" : "border-gray"
          } first-letter:transition ease-in-out m-0 focus:outline-none hover:border-[#B3B3B3] focus:border-[#2584FF]`}
        >
          {placeholder.length > 0 && (
            <option value="" selected disabled>
              {placeholder}
            </option>
          )}
          {options.map((option, index) => (
            <option
              key={index}
              // selected={index === 0 && placeholder.length > 0}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>
      </div>
      {error.length !== 0 && (
        <div className="flex items-center space-x-2 text-xs text-red">
          <AiFillExclamationCircle />
          <p className="">{error}</p>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
