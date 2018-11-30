import React from "react";
import { Link } from "react-router-dom";
const Home = () => (
  <div  className="container" style={{marginTop:87, color:"#132238"}}>
    <h1 className="display-1 text-center"> <b> Isaac Romero </b></h1>
    <p className="h2 text-center">
      Full Stack Developer
    </p>
    <p className="h3 p-4 text-center">
    Mathematician turned software developer.
    Recently created several apps with databases using MySql/Sequelize and MongolDB/Mongoose.
    Find these examples and more in the  <Link to="/portfolio">portfolio</Link> link above. 
    
    </p>
  </div>
);

export default Home;
