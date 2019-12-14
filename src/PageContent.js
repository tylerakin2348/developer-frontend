// Also requires react import, but no react dom
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from 'react-router-dom';
import {useTransition, animated} from 'react-spring';

import HomePageContent from './Content/HomePageContent';
import AboutPageContent from './Content/AboutPageContent';
import Contact from './Content/Contact';
import WorkContent from './Content/WorkContent';
import Portfolio from './Content/Portfolio';
import Technology from './Content/Technology';

import './assets/css/page-content.css';

// Primary ReactJs Function
function PageContent() {
    const location = useLocation()
    const transitions = useTransition(location, location => location.pathname, {
    from: {  transform: 'translate(100%,0)' },
    enter: { transform: 'translate(0%,0)' },
    leave: {  transform: 'translate(-50%,0)' },
  })
  return transitions.map(({ item: location, props, key }) => (
     <div className="page-content-animation-wrapper" >
         <animated.div key={key} style={props}>
           <Switch location={location}>
               <Route exact path='/about-tyler' render={() => <AboutPageContent /> } />
               <Route exact path='/' render={() => <HomePageContent /> } />
               <Route exact path='/contact' render={() => <Contact /> } />
               <Route exact path='/work' render={() => <WorkContent /> } />
               <Route exact path='/work/portfolio' render={() => <Portfolio /> } />
               <Route exact path='/work/technology' render={() => <Technology /> } />
           </Switch>
         </animated.div>
      </div>
  ))

}

// Export app function to use it in index.js
export default PageContent;
