import React from "react";

function Entrys(props) {
  return (
    <React.Fragment>
      {props.entries.map((entry, index) => (
        <div
          className="m-5 w-[19.6875rem] h-[20.9375rem] outline-none flex rounded-[1.25rem] py-5 px-[10px] bg-[#d5fd98] shadow-[5px_5px_10px_rgba(2_95_7_.5)] overflow-hidden flex-col gap-2"
          key={index}
        >
          <div className="h-[4.1875rem] border-solid flex item-center justify-center">
            <h1 className="text-center whitespace-nowrap text-xl mb-2 font-bold h-full">{entry.title}</h1>
          </div>
          <div className="h-[16.75rem] border-solid border-green-700 border-2 p-2 break-words overflow-hidden rounded-[0.625rem]">
            <p>{entry.content}</p>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
}

export default Entrys;
