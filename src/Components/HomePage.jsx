import React from "react";
import NavBar from "./NavBar";
import Section from "./Section";
function HomePage(props) {
  return (
    <div className="w-screen h-screen overflow-y-auto bg-[radial-gradient(#d8ffd8,#92ff92)]">
      <NavBar onLogin={props.onLogin} onSignUp={props.onSignUp} showNavbar={props.homePageNavbar}/>
      <Section/>
    </div>
  );
}

export default HomePage;
