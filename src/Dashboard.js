import React from "react";
import { NavLink } from "react-router-dom";
import "./Four_Zero_Foure.css";
const Dashboard = (props) => {
  const onsubmit = () => {
    localStorage.removeItem("token");
    props.history.push("/login");
  };

  return (
    <div className="text-center">
      <h1>dashboard</h1>
      <NavLink exect activeClassName="link_404" to="/login">
        <button className="btn primary-btn" onClick={onsubmit}>
          Logout
        </button>
      </NavLink>
    </div>
  );
};

export default Dashboard;
