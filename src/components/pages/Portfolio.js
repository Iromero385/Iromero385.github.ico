import React from "react";
import PortfolioFrontEnd from "./PortfolioFrontEnd"
import PortfolioPragramming from "./PortfolioProgramming"
import PortfolioFullStack from "./PortfolioFullStack"
import { Link, Route } from "react-router-dom"
import "./Portfolio.css"

const Portfolio = (props) => (
  <div className="container" style={{ marginTop: 87, color:"#132238" }}>
    <h1 className="my-0">Portfolio</h1>
    <hr></hr>
    <div className="row mt-5">
      <div className="col-md-4">
        <Link to={`/portfolio/front-end`} type="link" >
          <button
          className={
            window.location.pathname === "/portfolio/front-end" ? "btn btn-lg btn-block text-dark p-3 activeBtn" : "btn btn-lg btn-block text-dark p-3"}
          > Front-End</button>
        </Link>
      </div>
      <div className="col-md-4">
        <Link to={`/portfolio/programming`}  >
          <button style={{overflow:"hidden"}}  className={
            window.location.pathname === "/portfolio/programming" ? "btn btn-lg btn-block text-dark p-3 activeBtn" : "btn btn-lg btn-block text-dark p-3"}  > Programming/Back-End </button>
        </Link>
      </div>
      <div className="col-md-4">
        <Link to={`/portfolio/fullStack`}  >
          <button style={{overflow:"hidden"}}  className={
            window.location.pathname === "/portfolio/fullStack" ? "btn btn-lg btn-block text-dark p-3 activeBtn" : "btn btn-lg btn-block text-dark p-3"}  > Full Stack / MERN APPS </button>
        </Link>
      </div>
     

    </div>
   
    <Route exact path={`/portfolio/front-end`} component={PortfolioFrontEnd} />
    <Route exact path={`/portfolio/programming`} component={PortfolioPragramming} />
    <Route exact path={`/portfolio/fullStack`} component={PortfolioFullStack} />
    
    {/* <Route exact path={`${props.match.url}/programming-and-backen`} component={} />
    <Route exact path={`${props.match.url}/full-stack`} component={} /> */}
  </div>
);

export default Portfolio;
