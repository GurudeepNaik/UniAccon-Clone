import React from "react";
import logo from "../../Images/logo.png";
import "./header.css";
import { TfiWorld } from "react-icons/tfi";
import { HiBars3 } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <div className="header-container">
    <div className="container">
      <div className="logo">
        <img className="logoImg" src={logo} alt="logo" />
      </div>
      <div className="nav-bar">
        <h3>Become a host</h3>
        <div className="world-container">
        <TfiWorld className="world"/>
        </div>
        <div className="profile">
          <HiBars3 className="bar" />
          <div className="redDot">
          <CgProfile fill="black" className="profile-icon" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Header;
