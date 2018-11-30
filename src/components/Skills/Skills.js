import React from "react";
import "./Skills.css"

const Skills = props => (
  <div className="container" style={{ marginTop: 87, fontSize: "3em", color: "#132238" }}>
    <h1 >Skills</h1>
    <div className="row">
      <div className="col-md-6 card">
        <div className="h4 card-title">Libraries</div>
        <ul className="list-inline list-icons card-body">
          <li className="list-inline-item scale">
            <i className="devicon-jquery-plain-wordmark"></i>
          </li>
          <li className="list-inline-item libraries-icons">
            <i className="devicon-sequelize-plain"></i>
          </li>
          <li className="list-inline-item libraries-icons">
            <i className="devicon-mongodb-plain-wordmark"></i>
          </li>
          <li className="list-inline-item libraries-icons">
            <i className="devicon-express-original-wordmark font-weight-bold"></i>
          </li>
          <li className="list-inline-item libraries-icons">
            <i className="devicon-react-original-wordmark"></i>
          </li>
          <li className="list-inline-item libraries-icons">
            <i className="devicon-nodejs-plain"></i>
          </li>
          <li className="list-inline-item libraries-icons">
            <i className="devicon-bootstrap-plain"></i>
          </li>
        </ul>
      </div>
      <div className="col-md-6 card">

        <div className="h4 card-title"> Additional Experiences in Libraries</div>
        <div className="row card-body">
          <div className="col-md-4">
            <ul className="list-inline list-icons" style={{ fontSize: "1rem", paddingTop: "0px" }}>
              Handle Bars
          <br />
              Firebase
          <br />
              Google Maps
          <br />
              Material ui
          <br />
              Babel
          <br />
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list-inline list-icons" style={{ fontSize: "1rem", paddingTop: "0px" }}>
              Moments
              <br />
              Gifs
              <br />
              OMDb
              <br />
              Spotify
              <br />
              AnimateCss
          </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 card">
        <div className="h4 card-title">Programming/Markup/Styling Languages</div>
        <ul className="list-inline list-icons card-body">
          <li className="list-inline-item">
            <i className="devicon-javascript-plain"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicon-python-plain"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicon-html5-plain-wordmark"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicon-css3-plain-wordmark"></i>
          </li>
        </ul>

      </div>
      <div className="col-md-6 card">
        <div className="h4 card-title">Additional Experiences in Programming Languages</div>
        <ul className="list-inline list-icons card-body">
          <li className="list-inline-item">
            <i className="devicon-ruby-plain"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicon-c-plain"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicon-cplusplus-plain"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicon-csharp-plain"></i>
          </li>

        </ul>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 card">
        <div className="h4 card-title">Tools</div>
        <ul className="list-inline list-icons">
          <li className="list-inline-item">
            <i className="devicon-mysql-plain-wordmark"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicon-mongodb-plain-wordmark"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicon-github-plain"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicon-heroku-original"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicon-slack-plain"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicon-visualstudio-plain"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicon-windows8-original"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicon-apple-original"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicon-chrome-plain"></i>
          </li>
        </ul>
      </div>
      <div className="col-md-6 card ">
        <div className="h4 card-title">Other Tools</div>
        <ul className="list-inline list-icons card-body" style={{ fontSize: "1rem" }}>
          Google Suite
          <br />
          Microsoft Suite (Excel, Word, etc)
        </ul>
      </div>
    </div>
    <div className="row ">
      <div className="col-md-4 h4 ">
        Additional Core Concepts
        <ul type="none">
          Algorithm<br />
          Data Structures<br />
          Modular Programing<br />
        </ul>
      </div>
      <div className="col-md-4 h4 ">
        <br></br>
        <ul type="none">
          MERN Stack<br />
          JSON Structures<br />
          Restful API<br />
        </ul>
      </div>
    </div>
  </div>
);

export default Skills;
