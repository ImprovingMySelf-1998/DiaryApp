import React from "react";

function NavBar(props) {
  let homePageNavbar = (
    <div className="flex box-border w-full h-20 items-center bg-[linear-gradient(0deg,#449244_3%,#64da64_20%)] text-end mobile:first:text-start mobile:first:pl-2 laptop:first:text-start laptop:first:pl-2 laptop:">
      <div
        style={{ textShadow: "0 0 10px #006400" }}
        className="text-[#f5f5f5] w-1/2"
      >
        <h1 className="block text-3xl my-3.5 mx-0 font-bold isolate mobile:text-xl">
          Diary App
        </h1>
      </div>
      <div className="px-3 flex gap-3 mobile:text-sm w-1/2 justify-end">
        <button
          className="border border-solid border-black border-opacity-25 py-1 px-4 text-sm rounded uppercase font-sans hover:bg-black hover:bg-opacity-5"
          onClick={props.onLogin}
        >
          Login
        </button>
        <button
          className="text-white font-sans border border-solid border-black border-opacity-5 rounded bg-black bg-opacity-20 py-1 px-4 uppercase"
          onClick={props.onSignUp}
        >
          Sign Up
        </button>
      </div>
    </div>
  );

  let dashBoardNavbar = (
    <div className="flex box-border w-full h-20 items-center bg-[linear-gradient(0deg,#449244_3%,#64da64_20%)] text-end mobile:first:text-start mobile:first:pl-2 laptop:first:text-start laptop:first:pl-2 laptop:">
      <div
        style={{ textShadow: "0 0 10px #006400" }}
        className="text-[#f5f5f5] w-1/2"
      >
        <h1 className="block text-3xl my-3.5 mx-0 font-bold isolate mobile:text-xl">
          Diary App
        </h1>
      </div>
      <div className="px-3 flex gap-3 mobile:text-sm w-1/2 justify-end">
        <button className="border border-solid border-black border-opacity-25 py-1 px-4 text-sm rounded uppercase font-sans hover:bg-black hover:bg-opacity-5" onClick={props.onReturn}>
          Logout
        </button>
      </div>
    </div>
  );
  return (
    <React.Fragment>
      {props.showNavbar ? dashBoardNavbar : homePageNavbar}
    </React.Fragment>
  );
}

export default NavBar;
