import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Education from "./components/pages/Education";
import Skills from "./components/Skills";
import Experience from "./components/pages/Experience";
import Portfolio from "./components/pages/Portfolio"
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
         <NavTabs />
      <Route exact path="/" component={Home} />
      <Route exact path="/aboutme" component={About} />
      <Route exact path="/education" component={Education} />
      <Route exact path="/experience" component={Experience} />
      <Route  path="/portfolio" component={Portfolio} />
      <Route exact path="/skills" component={Skills} />
      </div>
      </Router>
    );
  }

}

export default App;
