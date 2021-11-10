import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand" href="#">
          <Link to="/">Navbar</Link>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <span className="nav-link" href="#">
                <NavLink exect activeClassName="myActiveClass" to="/login">
                  Home
                </NavLink>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" href="#">
                <NavLink exect activeClassName="myActiveClass" to="/Register">
                  About
                </NavLink>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" href="#">
                <NavLink exect activeClassName="myActiveClass" to="/Dashboard">
                  Profile
                </NavLink>
              </span>
            </li>
            {/* <li className="nav-item">
              <span className="nav-link disabled" href="#">
                <NavLink to="/">LogOut</NavLink>
              </span>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
