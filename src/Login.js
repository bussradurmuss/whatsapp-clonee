import { Button } from "@mui/material";
import React from "react";
import "./Login.css";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useStateValue } from "./StateProvider";
import { actiontTypes } from "./reducer";

function Login() {
  const [{ user }, dispatch] = useStateValue();

  const signIn = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        dispatch({ type: actiontTypes.SET_USER, user: result.user });
      })
      .catch(
        (
          error // Handle Errors here.
        ) => alert(error.message)
      );
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/19/WhatsApp_logo-color-vertical.svg"
          alt=""
        />

        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>

        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  );
}

export default Login;
