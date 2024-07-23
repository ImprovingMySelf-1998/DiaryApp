import React from "react";

function NoProjectSelected(props) {
  return (
    <div className="m-5 w-[19.6875rem] h-[20.9375rem] outline-none flex justify-center items-center text-[31.25rem] rounded-[1.25rem] p-5 text-green-700 bg-[rgba(213_253_152)] bg-opacity-50 shadow-[5px_5px_10px_rgba(2_95_7_.5)] overflow-hidden border-2 border-solid border-[#006400]">
      <button onClick={props.onStartAddProject}>+</button>
    </div>
  );
}

export default NoProjectSelected;
