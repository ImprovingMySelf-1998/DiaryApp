import React, { useState } from "react";
import HomePage from "./Components/HomePage";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isNavbar, setIsNavbar] = useState(false);
  
  function handleLogin() {
    setIsLoggedIn(true);
    setIsSignUp(false);
    setIsNavbar(true);
  }

  function handleSignUp() {
    setIsSignUp(true);
    setIsLoggedIn(false);
  }

  function handleReturnMainPage() {
    setIsLoggedIn(false);
    setIsSignUp(false);
    setIsNavbar(false);
  }

  let content = isLoggedIn ? (
    <Login
      onSignUp={handleSignUp}
      onReturn={handleReturnMainPage}
      dashboardNavbar={isNavbar}
    />
  ) : isSignUp ? (
    <SignUp onReturn={handleReturnMainPage} onLogin={handleLogin}/>
  ) : (
    <HomePage
      onLogin={handleLogin}
      onSignUp={handleSignUp}
      homePageNavbar={isNavbar}
    />
  );

  return <React.Fragment>{content}</React.Fragment>;
}

export default App;
