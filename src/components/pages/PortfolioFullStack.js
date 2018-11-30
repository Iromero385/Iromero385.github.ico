import React from "react";
import Boom from "./images/Boom.png"
import GarageGood from "./images/GarageGoods.png"
import ArticleBlog from "./images/ArticleBlog.png"
import PortfolioExample from "./../PortfolioExample"

const PortfolioFullStack = () => (
  <div className="container my-3" >
    <h1 className="text-center">Full Stack APPs</h1>
    <div className="row">
      <PortfolioExample name="Garage Goods" logo2="fa fa-group"  logo="devicon-react-original-wordmark" link="https://github.com/Iromero385/Bamazon" pic={GarageGood} 
      description="A simple database for inventory, sales and adding product." readme="https://github.com/Iromero385/GarageGoods/blob/master/README.md"/>
      <PortfolioExample name="Boom" logo2="fa fa-group" logo="devicon-sequelize-plain" link="https://limitless-falls-79039.herokuapp.com/" pic={Boom}
      description="Retro gaming platform for community of gamers." readme="https://github.com/Iromero385/UCB_Project_2/blob/master/README.md" />
      <PortfolioExample name="Article Blog" logo2="devicon-mongodb-plain-wordmark" logo="devicon-nodejs-plain mx-1 "  link="https://github.com/Iromero385/hangman_console" pic={ArticleBlog} 
      description="Classic game of hangman using constructors and object. Letter are objects which are used to contruct words." readme="https://github.com/Iromero385/hangman_console/blob/master/README.md"/>
     
    </div>
  </div>
);

export default PortfolioFullStack;
