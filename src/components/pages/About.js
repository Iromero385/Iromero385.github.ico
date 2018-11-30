import React from "react";
import ProfilePic from "./images/IMG_0452.JPG"
import { Link } from "react-router-dom";
const About = () => (
  
    <div  className="container" style={{marginTop:87, color:"#132238"}} >
      <div className="row">
        <div className="col-md-3 card" >
            <h1><b>About Me</b></h1>
            <img src={ProfilePic} style={{width:250, borderRadius:"80%", marginBottom:"5%"}}/>
        </div>
        <div className="col-md-9 card" >
          <h4 className="card-body">
          
         <div style={{display:"inline", color:"transparent"}}>...</div>Although new to web development, I am not new to programming. I took several college courses in programming fundamentals using <i class="devicon-c-plain">++</i> and  <i class="devicon-c-plain">#</i>. I completed my undergrad studies in Mathematics at the Univeristy of California Berkeley. My full <Link to="/education">education</Link> experience is above in the navagation bar. After two years of teaching and tutoring, I returned to progamming, this time however, concentrating in web development. For my employment history and <Link to="/education">experience</Link> use the navagation bar. <br/> 
         <div style={{display:"inline", color:"transparent"}}>...</div> I recently completed a bootcamp course for full stack web developement at UC Berkeley Extension. The <a href="https://bootcamp.berkeley.edu/coding/" target="_blank" rel="noopener noreferrer"> curriculum</a> for this program was diverse but focused much on MERN stack. I learned several new skills listed here under the <Link to="/skills">skills</Link> link above. <br/>
         <div style={{display:"inline", color:"transparent"}}>...</div> With my new aquired skills, I am eager to take on new projects where I can continue learning and developing further. I have listed my curriculum project in the  <Link to="/portfolio">portfolio</Link> link. Some of these projects were done in groups- these projects will be denoted with the icon <i className="fa fa-group"></i>.

          </h4>
        </div>
      </div>
    </div>
  
);

export default About;
