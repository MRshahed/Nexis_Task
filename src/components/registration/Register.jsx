import "../login/Login.css";
import "./Register.css";
import Home from "../home/Home";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [fName, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://test.nexisltd.com/signup", {
        first_name: fName,
        last_Name: Lname,
        phone_number: phone,
        email: email,
        password: password,
      });
      if (res.status === 200) {
        window.location.replace("/login");
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
          <h1 className="login__title">SignUp Form</h1>
          <div className="login__input">
            <input
              type="text"
              placeholder="Write First Name"
              onChange={(e) => setFname(e.target.value)}
            />
            <input
              type="text"
              placeholder="Write Last Name"
              onChange={(e) => setLname(e.target.value)}
            />
            <input
              type="tel"
              placeholder="+880 1xxxxxxxxx"
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="email"
              placeholder="Write Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Write Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="tootltip tootltip__register">
              Your Password Must be 8 Character
            </span>
          </div>
          <button className="button" type="submit" onClick={handleSubmit}>
            Sign Up
          </button>
          <p className="login__footer-text">
            Already have an account?{" "}
            <Link to={"/login"}>
              <span className="login__footer-link">LOGIN HERE</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
