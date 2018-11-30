import React from "react";
import TriviaGame from "./images/TriviaGame.png"
import GifTastic from "./images/Giftastic.png"
import BasicPortfolio from "./images/BasicPortfolio.png"
import JobNinja from "./images/JobNinja.png"
import Psychic from "./images/Psychic.png"
import BootstrapPortfolio from "./images/BootstrapPortfolio.png"
import WireFrame from "./images/WireFrame.png"
import ClickyGame from "./images/ClickyGame.png"
import PortfolioExample from "./../PortfolioExample"

const PortfolioFrontEnd = () => (
  <div className="container my-3" >
    <h1 className="text-center">Front-End</h1>
    <div className="row">
      <PortfolioExample name="Trivia Game" logo="devicon-javascript-plain" link="https://iromero385.github.io/TriviaGame/" pic={TriviaGame} 
      description="Simple Trivial game using set interval time outs and some clever javascript." readme="https://github.com/Iromero385/TriviaGame/blob/master/README.md"/>
       <PortfolioExample name="Psychic" logo="devicon-javascript-plain" link="https://iromero385.github.io/Psychic-Game/" pic={Psychic} 
      description="Simple letter guess game." readme="https://github.com/Iromero385/Psychic-Game/blob/master/README.md" />
      <PortfolioExample name="Clicky Game" logo="devicon-react-original-wordmark" link="https://iromero385.github.io/deployReactApp/" pic={ClickyGame} 
      description="Memory game using React. Do not click on the same image twice" readme="https://github.com/Iromero385/Anime-Clicky-Game/blob/master/README.md"/>
     
     {/* add Porject one  */}
    </div>
    <div className="row">
      <PortfolioExample name="CSS Positioning" logo="devicon-css3-plain-wordmark" logo2="devicon-html5-plain-wordmark my-1 " link="https://iromero385.github.io/HW-Wireframe/" pic={WireFrame} 
      description="Using CSS to position divs on a page." readme="https://github.com/Iromero385/TriviaGame/blob/master/README.md"/>
      <PortfolioExample name="Basic Portfolio" logo="devicon-css3-plain-wordmark  " logo2="devicon-html5-plain-wordmark my-1 " link="https://iromero385.github.io/Basic-Portfolio/" pic={BasicPortfolio} 
      description="Basic portfolio using HTML and CSS only. No framing libraries were used only css." readme="https://github.com/Iromero385/Basic-Portfolio/blob/master/README.md"/>
      <PortfolioExample name="Bootstrap Portfolio" logo="devicon-bootstrap-plain my-1 " link="https://iromero385.github.io/Bootstrap-Portfolio/" pic={BootstrapPortfolio} 
      description="Remake of basic portfolio using bootstrap. " readme="https://github.com/Iromero385/Bootstrap-Portfolio/blob/master/README.md"/>
    </div>
    <div className="row">
      <PortfolioExample name="Job Ninja" logo="fa fa-group" link="https://github.com/Iromero385/Project1/" pic={JobNinja} 
      description="Job Searching app using google maps, weather and yelp APIs. Site is offline but readme has screenshots." readme="https://github.com/Iromero385/Project1/blob/master/README.md"/>
       <PortfolioExample name="GifTastic" logo="devicon-jquery-plain-wordmark  my-1"link="https://iromero385.github.io/GifTastic/" pic={GifTastic} 
      description="Create dynamic buttons and get some fun gifs using AJAX calls. " readme="https://github.com/Iromero385/GifTastic/blob/master/README.md" />
      
    </div>
  </div>
);

export default PortfolioFrontEnd;
