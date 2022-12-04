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
  // window.localStorage.clear();
  const uName = userdata.flatMap((e) => [e[2], e[4], e[5], e[8], e[10], e[11]]);
  const Astatus = uName.flatMap((e, index, arr) => e.attendance["2022-11-02"]);
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
              {uName.map((e) => (
                <li key={e.id}>2022-11-02</li>
              ))}
            </ul>
          </div>

          <div className="table__item">
            <h3 className="table__title">Employee Name</h3>
            <ul className="table__item-list">
              {uName.map((e) => (
                <li key={e.id}>{e.name}</li>
              ))}
            </ul>
          </div>

          <div className="table__item">
            <h3 className="table__title">Status</h3>
            <ul className="table__item-list">
              {Astatus.map((e) => (
                <li>{e.status}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
