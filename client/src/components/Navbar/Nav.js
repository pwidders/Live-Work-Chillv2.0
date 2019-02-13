import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Navbar from "../Navbar/Nav.css";

function Nav() {
  return (
    <div className="navBar">
      <nav className="navbar navbar-expand-lg navbar">
        <a className="navbar-brand" href="/">
          <img
            alt="logo"
            src="../assets/photos/logo7.png"
            className="logo"
            width="248px;"
            height="132px;"
          />
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home <i className="fa fa-home" />
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login <i className="fa fa-user-plus" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/learn" className="nav-link">
                About <i className="fa fa-info" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
