import React from "react";
import "./Home.css";
import logo from "../../assets/ultimate hrm logo-05-02 5.png";
import bgImg from "../../assets/istockphoto-1321277096-612x612 1.png";
const Home = () => {
  return (
    <div className="home__container">
      <div className="home__left">
        <div className="home__left-content">
          <img src={logo} alt="logo" className="home__logo" />
          <img src={bgImg} alt="background" className="home__bg" />
        </div>
      </div>
    </div>
  );
};

export default Home;
