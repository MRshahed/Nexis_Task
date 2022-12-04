import React, { useEffect, useState } from "react";
import "./Main.css";
import logo from "../../assets/ultimate hrm logo-05-02 5.png";
import axios from "axios";

const Main = () => {
  const [userdata, setUserdata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const token = window.localStorage.getItem("token");
      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      };

      try {
        const res = await axios.get("https://test.nexisltd.com/test", {
          headers,
        });
        setUserdata([res.data]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const keyData = [...userdata].flatMap((e) => Object.values(e));
  const Attendancestatus = keyData.flatMap((e) => e.attendance["2022-11-02"]);

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
              {Attendancestatus.map((e) => (
                <li key={e.times}>2022-11-02</li>
              ))}
            </ul>
          </div>

          <div className="table__item">
            <h3 className="table__title">Employee Name</h3>
            <ul className="table__item-list">
              {keyData.map((e) => (
                <li key={e.id}>{e.name}</li>
              ))}
            </ul>
          </div>

          <div className="table__item">
            <h3 className="table__title">Status</h3>
            <ul className="table__item-list">
              {Attendancestatus.map((e) => (
                <li key={e.times + 1}>{e.status}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
