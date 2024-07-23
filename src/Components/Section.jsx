import React from "react";
import MobileDiary from "../Assets/MobileDiary.png";
function Section() {
  return (
    <div
      className=" h-[calc(100%-80px)] flex items-center flex-wrap-reverse box-border laptop:text-center laptop:my-[10rem] laptop:h-[30rem] justify-center laptop:gap-7"
      style={{ textShadow: "2px 2px 7px rgba(0,100,0,.7)" }}
    >
      <div className="mobile:w-3/4 w-1/2">
        <h1 className="block my-3.5 mx-0 font-bold isolate text-[#006400] text-[90px] leading-none mobile:text-center mobile:text-[2rem] laptop:text-[2rem]">
          Digitize Your Routine, Thoughts And Memories
        </h1>
      </div>
      <div>
        <img src={MobileDiary} alt="Bookspile" className="mobile:h-[15rem]" />
      </div>
    </div>
  );
}

export default Section;
