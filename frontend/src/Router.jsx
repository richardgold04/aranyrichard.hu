import "./App.css";
import About from "./components/About/About";
import CallToAction from "./components/CallToAction/CallToAction";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experiences/Experience";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import Sidebar from "./components/Main menu - sidebar/Sidebar";
import Skills from "./components/Skills/Skills";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />
			<Router>
      <Switch>
        <Route exact path="/" >
          <Hero />
        </Route>
        <Route exact path="#about">
          <About />
          <CallToAction />
          <Skills />
        </Route>
        <Route exact path="#portfolio">
          <Portfolio />
          <CallToAction />
        </Route>
        <Route exact path="#experiences">
          <Experience />
          <CallToAction />
        </Route>
        <Route exact path="#contact">
          <Contact />
          <Footer />
        </Route>
      </Switch>
			</Router>
    </div>
  );
}

export default App;
