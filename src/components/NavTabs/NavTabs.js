import React from "react";
import { Link } from "react-router-dom";
import "./NavTabs.css"

const NavTabs = () => (
  <div>
    <ul className="nav nav-tabs h4 p-3 fixed-top" style={{ backgroundColor: "#364E68" }}>
      <li className="nav-item">
        <Link
          to="/"
          className={
            window.location.pathname === "/" ? "nav-link active backcolor" : "nav-link"
          }>
          <p className="nav-text">Home</p>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/aboutme"
          className={
            window.location.pathname === "/aboutme" ? "nav-link active backcolor" : "nav-link"
          }>
          <p className="nav-text">About Me</p>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/education"
          className={
            window.location.pathname === "/education" ? "nav-link active backcolor" : "nav-link"
          }>
          <p className="nav-text">Education</p>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/experience"
          className={
            window.location.pathname === "/experience" ? "nav-link active backcolor" : "nav-link"
          }>
          <p className="nav-text">Experience</p>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/portfolio"
          className={
            window.location.pathname.indexOf("/portfolio") !== -1 ? "nav-link active backcolor " : "nav-link"
          }>
          <p className="nav-text">Portfolio</p>
        </Link>
      </li>
      <li className="nav-item ">
        <Link
          to="/skills"
          className={
            window.location.pathname === "/skills" ? "nav-link active backcolor" : "nav-link"
          }>
          <p className="nav-text">Skills</p>
        </Link>
      </li>
      <li className="nav-item ml-auto ">
        <a href="https://www.linkedin.com/in/isaac-m-romero/" target="_blank" rel="noopener noreferrer" >
          <i className="fab fa-linkedin nav-text" style={{ fontSize: 48 }}></i>
        </a>
      </li>
      <li className="nav-item mx-3">
        <a href="https://github.com/Iromero385" target="_blank" rel="noopener noreferrer">
          <span>
            <i className="fab fa-github-square nav-text" style={{ fontSize: 48 }}></i>
          </span>
        </a>
      </li>
      <li className="nav-item">
        <a href="https://drive.google.com/file/d/1-iNcGz55lGgjfpGkK1YtF_HbGNhbhbxe/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <span>
            <i className="far fa-file nav-text my-1 nav-text" style={{ fontSize: 44 }}></i>
          </span>
        </a>
      </li>

    </ul>
  </div>
);

export default NavTabs;
