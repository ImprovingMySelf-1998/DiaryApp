import React, { forwardRef } from "react";

const Input = forwardRef(function Input(props, ref) {
  return (
    <div className="flex flex-col text-center">
      <label>{props.label}</label>
      <input
        className="border-b-2 focus:outline-none hover:border-black"
        {...props}
        ref={ref}
        type={props.type}
      />
    </div>
  );
});

export default Input;
