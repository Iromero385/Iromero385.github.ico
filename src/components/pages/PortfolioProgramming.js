import React from "react";
import Bamazon from "./images/Bamazon.png"
import liri from "./images/liri.png"
import Hangman from "./images/hangman.png"
import TrainSchedule from "./images/TrainSchedule.png"
import Burger from "./images/Burger.png"
import CrystalGame from "./images/CrystalGame.png"
import PortfolioExample from "./../PortfolioExample"

const PortfolioFrontEnd = () => (
  <div className="container my-3" >
    <h1 className="text-center">Programming / Back-End</h1>
    <div className="row">
    <PortfolioExample name="Bamazon" logo2="devicon-mysql-plain-wordmark h1" logo="devicon-nodejs-plain mx-1 " link="https://github.com/Iromero385/Bamazon" pic={Bamazon} 
      description="A simple database for inventory, sales and adding product." readme="https://github.com/Iromero385/Bamazon/blob/master/README.md"/>
      <PortfolioExample name="liri" logo="devicon-nodejs-plain mx-1 " link="https://github.com/Iromero385/liri-node-app/" pic={liri} 
      description="Personal assistant that can look up movies, concerts, songs, etc." readme="https://github.com/Iromero385/GifTastic/blob/master/README.md" />
      <PortfolioExample name="Hangman Console" logo="devicon-nodejs-plain mx-1 "  link="https://github.com/Iromero385/hangman_console" pic={Hangman} 
      description="Classic game of hangman using constructors and object. Letter are objects which are used to contruct words." readme="https://github.com/Iromero385/hangman_console/blob/master/README.md"/>
     
    </div>
    <div className="row">
    <PortfolioExample name="Train Schedule"  logo2="devicon-javascript-plain mx-1" logo="devicon-jquery-plain-wordmark" link="https://iromero385.github.io/trianSchedule/" pic={TrainSchedule} 
      description="Schedule keeper for train departure using moments library and firebase." readme="https://github.com/Iromero385/trianSchedule/blob/master/README.md"/>
      <PortfolioExample name="Burger-eater" logo2="devicon-heroku-original" logo="devicon-mysql-plain-wordmark h1" link="https://stormy-thicket-66194.herokuapp.com/" pic={Burger} 
      description="Simplistic app to write/read data from Mysql. App was design using ORM structure." readme="https://github.com/Iromero385/burger/blob/master/README.md" />
      <PortfolioExample name="Crystal-Game" logo="devicon-express-original-wordmark h1 font-weight-bold" link="https://iromero385.github.io/unit-4-game/" pic={CrystalGame} logo2="devicon-jquery-plain-wordmark mx-1"
      description="Simple game using javascript and jquery." readme="https://github.com/Iromero385/liri-node-app/blob/master/README.md"/>
     
    </div>
  </div>
);

export default PortfolioFrontEnd;
