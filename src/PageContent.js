// Also requires react import, but no react dom
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { useTransition, animated, config } from "react-spring";
import { motion } from "framer-motion";
import HomePageContent from "./Content/HomePageContent";
import AboutPageContent from "./Content/AboutPageContent";
import Contact from "./Content/Contact";
import WorkContent from "./Content/WorkContent";
import Portfolio from "./Content/Portfolio";
import Technology from "./Content/Technology";

import "./assets/css/fonts.css";
import "./assets/css/general.css";
import "./assets/css/page-content.css";

// Primary ReactJs Function
function PageContent() {
  const location = useLocation();

  return (
    <main>
      <Switch location={location}>
        <Route exact path="/about-tyler" render={() => <AboutPageContent />} />
        <Route exact path="/contact" render={() => <Contact />} />
        <Route exact path="/work" render={() => <WorkContent />} />
        <Route exact path="/work/portfolio" render={() => <Portfolio />} />
        <Route exact path="/work/technology" render={() => <Technology />} />
      </Switch>
    </main>
  );
}

// Export app function to use it in index.js
export default PageContent;
