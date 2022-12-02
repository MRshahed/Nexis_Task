import "./Login.css";
import React, { useRef } from "react";
import Home from "../home/Home";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const userref = useRef();
  const passRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://test.nexisltd.com/login", {
        email: userref.current.value,
        password: passRef.current.value,
      });

      if (res.status === 200) {
        window.location.replace("main");
        const token = res.data.access_token;
        JSON.localStorage.setItem("token", token);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="section__container">
      <Home />
      <form className="login__container">
        <div className="login__content">
          <h1 className="login__title">Log in Form</h1>
          <div className="login__input">
            <input
              type="email"
              placeholder="Write Email Address"
              ref={userref}
            />
            <input type="password" placeholder="Write Password" ref={passRef} />
            <span className="tootltip">Your Password Must be 8 Character</span>
          </div>
          <button className="button" type="submit" onClick={handleSubmit}>
            Log In
          </button>
          <p className="login__footer-text">
            Don't have an account?{" "}
            <Link to={"/"}>
              <span className="login__footer-link">SIGNUP HERE</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
