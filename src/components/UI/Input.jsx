import React, { useContext } from "react";
import ModeContext from "../../context/mode-context";

export default function Input(props) {
  const {
    title,
    type,
    value,
    onChange,
    name,
    errorMsg,
    className,
    onBlur,
    isTouched,
  } = props;

  const ctx = useContext(ModeContext);
  return (
    <div className={`my-5 ${className}`}>
      <div className="relative">
        <input
          id={name}
          type={type}
          value={value}
          name={name}
          className={`${
            ctx.mode === "dark"
              ? "bg-[#0B1120] text-white"
              : "bg-transparent text-gray-900"
          } block px-2.5 pb-2.5 pt-4 w-full text-sm  rounded-md border-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
          placeholder=" "
          onChange={onChange}
          onBlur={onBlur}
        />
        <label
          htmlFor={name}
          className={`absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] ${
            ctx.mode === "dark" ? "bg-transparent" : "bg-white"
          } px-2 peer-focus:px-2 peer-focus:text-blue-600 ${
            ctx.mode === "dark"
              ? "peer-focus:bg-[#1A2338]"
              : "peer-focus:bg-slate-100"
          } peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`}>
          {title}
        </label>
      </div>

      {errorMsg && isTouched ? (
        <p className="text-red-500 text-sm">{errorMsg}</p>
      ) : null}
    </div>
  );
}
