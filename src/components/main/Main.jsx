import React, { useEffect } from "react";
import "./Main.css";
import logo from "../../assets/ultimate hrm logo-05-02 5.png";
import axios from "axios";

const Main = () => {
  useEffect(() => {
    const fetchData = async () => {
      const token = JSON.parse(localStorage.getItem("token"));

      try {
        const res = await axios.get("https://test.nexisltd.com/test", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="main__container">
      <div className="main__content">
        <img src={logo} className="home__logo main__logo" alt="logo" />
        <h1 className="main__heading">Attendance Information</h1>
      </div>
      <div className="table__container">
        <div className="table__content">
          <div className="table__item">
            <h3 className="table__title">Date</h3>
            <ul className="table__item-list">
              <li>Today</li>
              <li>Today</li>
              <li>Today</li>
              <li>Today</li>
              <li>Today</li>
              <li>Today</li>
              <li>Today</li>
              <li>Today</li>
            </ul>
          </div>

          <div className="table__item">
            <h3 className="table__title">Employee Name</h3>
            <ul className="table__item-list">
              <li>Shahed</li>
              <li>Shahed</li>
              <li>Shahed</li>
              <li>Shahed</li>
              <li>Shahed</li>
              <li>Shahed</li>
              <li>Shahed</li>
              <li>Shahed</li>
            </ul>
          </div>

          <div className="table__item">
            <h3 className="table__title">Status</h3>
            <ul className="table__item-list">
              <li>Present</li>
              <li>Present</li>
              <li>Present</li>
              <li>Present</li>
              <li>Present</li>
              <li>Present</li>
              <li>Present</li>
              <li>Present</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
