import { useState, useRef } from "react";
import Validate from "../utils/Validate";
import { useNavigate } from "react-router-dom";

function Login() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const fullName = useRef();
  const email = useRef();
  const password = useRef();
  function SignUp() {
    const currentName = fullName.current.value;
    const currentEmail = email.current.value;
    const currentPassword = password.current.value;
    const message = Validate(currentName, currentEmail, currentPassword);
    if (!message) {
      const userData = {
        name: currentName,
        email: currentEmail,
        password: currentPassword,
      };
      localStorage.setItem("user", JSON.stringify(userData));
      setIsSignIn(true);
    } else {
      setErrorMessage(message);
    }
  }
  function SignIn() {
    const signedUpUser = JSON.parse(localStorage.getItem("user"));
    const currentEmail = email.current.value;
    const currentPassword = password.current.value;
    console.log(currentEmail);
    console.log(signedUpUser.email);
    if (signedUpUser.email === currentEmail) {
      if (signedUpUser.password === currentPassword) {
        console.log("Successfully Verified!");
        navigate("/dashboard");
      } else {
        setErrorMessage("Incorrect Password");
      }
    } else {
      setErrorMessage("Incorrect Email");
    }
  }
  return (
    <div className="">
      <img
        src="https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_1280.jpg"
        className="min-w-full min-h-full object-cover absolute"
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute z-10 bg-black my-60 mx-auto right-0 left-0 bg-opacity-20 p-12 text-white rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn ? (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="w-full p-2 my-2 bg-gray-800 "
          />
        ) : (
          ""
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="w-full p-2 my-2 bg-gray-800 "
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full p-2 my-2 bg-gray-800"
        />
        <p className="text-lg text-red-600 font-bold">{errorMessage}</p>
        <button
          onClick={!isSignIn ? () => SignUp() : () => SignIn()}
          className="w-full p-2 my-2 bg-red-800 rounded-lg"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 cursor-pointer"
          onClick={() => setIsSignIn(!isSignIn)}
        >
          {isSignIn
            ? "Not a member? Click here to Sign Up"
            : "Click Here to Sign in"}
        </p>
      </form>
    </div>
  );
}

export default Login;
