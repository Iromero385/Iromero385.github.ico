import React from "react";
import Berkeley from "./images/Berkeley.png"
import BerkeleyExt from "./images/BerkeleyExt.jpg"

const Education = () => (
  <div  className="container" style={{marginTop:87, color:"#132238"}}>
  <h1>Education</h1>
  <div className="row">
        <div className="col-md-4 card" style={{backgroundColor:"#EBF0F6"}}>
            <h2>UC Berkeley Extension</h2>
            <h4>Certification Full Stack Developer</h4>
            <h4>July 2018 to October 2018</h4>
            <img src={BerkeleyExt} style={{width:150, margin:"auto"}}></img>
        </div>
        <div className="col-md-4 card" style={{backgroundColor:"#EBF0F6"}}>
            <h2>University of Berkeley</h2>
            <h4>BA in Mathematics</h4>
            <h4>August 2012 to May 2016</h4>
            <img src={Berkeley} style={{width:150, margin:"auto"}}></img>
        </div>
        <div className="col-md-4 card" style={{backgroundColor:"#EBF0F6"}}>
            <h2>Mt. San Jacinto Community College (MSJC)</h2>
            <h4>Degrees: AS in Mathematics, AS in Science, AA Liberal Arts in Mathematics & Science, AA Liberal Arts & Humanities, and AS Libertal Art in Business & Technology</h4>
            <h4>August 2009 to June 2012</h4>
        </div>
    </div>
    {/* <div className="row">
        <div className="col-md-4 card">
            <h2>UC Berkeley Extension</h2>
        </div>
        <div className="col-md-4 card">
            <h2>July 2018 to October 2018</h2>
        </div>
        <div className="col-md-4 card">
            <h2>Certification Full Stack Developer</h2>
        </div>
    </div>
    <div className="row">
        <div className="col-md-4 my-4 card">
            <h2>University of California Berkeley</h2>
        </div>
        <div className="col-md-4 my-4 card">
            <h2>August 2012 to May 2016</h2>
        </div>
        <div className="col-md-4 my-4 card">
            <h2>BA in Mathematics</h2>
        </div>
    </div>
    <div className="row">
        <div className="col-md-4 card">
            <h2>Mt. San Jacinto Community College (MSJC)</h2>
        </div>
        <div className="col-md-4 card">
            <h2>August 2009 to June 2012</h2>
        </div>
        <div className="col-md-4 card">
            <h2>Degree: AS in Mathematics, AS in Science, AA Liberal Arts in Mathematics & Science, AA Liberal Arts & Humanities, and AS Libertal Art in Business & Technology</h2>
        </div>
    </div> */}

    
    {/* <p className="h3">
      
      Mt. San Jacinto Community College (MSJC) August 2009 to June 2012
      Degree: AS in Mathematics, AS in Science, AA Liberal Art in Mathematics & Science, AA Liberal Art in Arts &
      Humanities, and AS Liberal Art in Business & Technology
    </p> */}
  </div>
);

export default Education;
