import React, { useState } from "react";
import {
  AiFillExclamationCircle,
  AiFillEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";

const Inputfield = ({
  valueState = ["", (v) => {}],
  errorState = ["", (v) => {}],
  placeholder = "",
  type = "text",
  title = "",
  isDisabled = false,
  referral = false,
  className = "w-full",
}) => {
  const [value, setValue] = valueState;
  const [error, setError] = errorState;
  const [hide, setHide] = useState(true);

  return (
    <div
      className={`${className} font-poppins flex flex-col items-start justify-center space-y-2 relative`}
    >
      <label className="text-blue text-sm -mb-5 ml-3 z-10 bg-white px-2">{title}</label>
      {referral && (<label className="text-slate absolute z-10 px-4">KRI-</label>)}
      <div className="flex space-x-2 items-center w-full">
        <input
          disabled={isDisabled}
          type={type === "password" ? (hide ? "password" : "text") : type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            e.preventDefault();
            setValue(e.target.value);
            setError("");
          }}
          className={`${referral && "pl-12"} p-3 px-4  rounded-lg w-full text-slate bg-gray bg-clip-padding bg-no-repeat border-2 border-solid ${
            error.length !== 0 ? "border-yellow" : "border-gray"
          } first-letter:transition ease-in-out m-0 focus:outline-none hover:border-[#B3B3B3] focus:border-[#2584FF]`}
        />
        {type === "password" && (
          <button
            className="text-cloud p-2 border-2 bg-gray rounded-lg"
            onClick={(e) => {
              e.preventDefault();
              setHide(!hide);
            }}
          >
            {hide ? (
              <AiFillEye size={24} />
            ) : (
              <AiOutlineEyeInvisible size={24} />
            )}
          </button>
        )}
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

export default Inputfield;
