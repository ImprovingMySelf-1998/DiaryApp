import React, { useRef, useState } from "react";
import Input from "./Input";
import Modal from "./Modal";
import DashBoard from "./DashBoard";

function Login(props) {
  const [showPassword, setShowPassword] = useState(false);
  function handleShowPassword() {
    setShowPassword((showPassword) => !showPassword);
  }

  const userName = useRef();
  const password = useRef();
  const modal = useRef();
  const [isLoggedInDashBoard, setIsLoggedInDashBoard] = useState(false);
  if (userName.current && password.current) {
    userName.current.value = "superuser";
    password.current.value = "123456789";
  }
  function handleLogin() {
    const userNameValue = userName.current.value;
    const passwordValue = password.current.value;
    if (userNameValue.trim() === "" || passwordValue.trim() === "") {
      modal.current.open();
      return;
    }
    if (userNameValue.length > 5 && passwordValue.length > 8) {
      setIsLoggedInDashBoard(true);
    }
  }

  const dashBoard= props.dashboardNavbar;

  return (
    <React.Fragment>
      {!isLoggedInDashBoard && (
        <React.Fragment>
          <Modal ref={modal}></Modal>
          <div className="flex w-screen justify-center h-screen items-center">
            <div className="p-7 bg-white rounded-lg shadow-lg">
              <div className="flex flex-col gap-3">
                <div className="text-2xl font-medium font-sans leading-7 tracking-tight text-center">
                  Login
                </div>
                <hr className="border-2 w-[80%] border-green-600 mx-auto" />
                <Input label="User Name" ref={userName} />
                <Input
                  label="Password"
                  ref={password}
                  type={showPassword ? "text" : "password"}
                  onClick={handleShowPassword}
                />
                <div className="flex justify-center items-center h-full w-full">
                  <button
                    className="bg-[#4caf50] w-full h-full text-white font-sans py-2 uppercase rounded-md"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </div>
                <div>
                  <p>
                    Create Account Today?{" "}
                    <strong
                      className="text-blue-500 uppercase cursor-pointer visited:text-pink-500"
                      onClick={props.onSignUp}
                    >
                      Sign Up
                    </strong>
                  </p>
                  <p className="text-center">OR</p>
                  <p className="text-center">
                    Back to{" "}
                    <strong
                      className="text-blue-500 uppercase cursor-pointer visited:text-pink-500"
                      onClick={props.onReturn}
                    >
                      Home Page
                    </strong>{" "}
                    ?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
      {isLoggedInDashBoard && <DashBoard showNavbar={dashBoard} onReturn={props.onReturn}/>}
    </React.Fragment>
  );
}

export default Login;
