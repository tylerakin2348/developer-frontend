// Also requires react import, but no react dom
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Import components used below
    // Names logo here
import './css/App.css';

// Import Header Components
import Header from './Header';
import Footer from './Footer';

import AboutPageContent from './Content/AboutPageContent';
import HomePageContent from './Content/HomePageContent';
import Contact from './Content/Contact';
import WorkContent from './Content/WorkContent';
import Portfolio from './Content/Portfolio';
import Technology from './Content/Technology';

// Primary ReactJs Function
function App() {
  return ( // React functions are included in "return"

  // Write HTML as normal
  // Include ReactJs components
    <div className="App">

      <Header />

      <Switch>
        <Route exact path='/' component={HomePageContent} />
        <Route exact path='/about-tyler' component={AboutPageContent} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/work' component={WorkContent} />
        <Route exact path='/work/portfolio' component={Portfolio} />
        <Route exact path='/work/technology' component={Technology} />
      </Switch>

      <Footer />

    </div>
  );
}

// Export app function to use it in index.js
export default App;
