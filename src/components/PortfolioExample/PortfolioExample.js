import React from "react";
import "./PortfolioExample.css"

const PortfolioExample = (props) => (
  <div className="col-md-4 card pic my-2 mx-auto"style={{borderRadius:20, backgroundColor:"#EBF0F6"}}>
    <h3 className="card-title">{props.name}  <i className={props.logo + " float-right  my-1" }> </i>  <i className={props.logo2 + " float-right my-1" }> </i> </h3>
    <div className="card-body" style={{overflow:"hidden"}}>
      <a href={props.link} target="_blank" rel="noopener noreferrer" >
        <img src={props.pic} style={{ width: "300px",borderRadius:"10%" }}></img>
      </a>
      <div className="card-text">
        <p className="font-weight-bold">{props.description} </p>
      </div>
    </div>
    <div className="text-center" >
       <a style={{position:"relative", bottom:"0px"}} href={props.readme} target="_blank" rel="noopener noreferrer">README.md </a>
      </div>
  </div>
);

export default PortfolioExample;
