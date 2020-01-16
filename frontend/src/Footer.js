import React, { Component } from 'react';
import './assets/css/footer.css';
// import Backenddata from './backenddata';

// Primary ReactJs Function
class Footer extends React.Component {
    render() {
        return ( // React functions are included in "return"
        // Write HTML as normal
            <footer className="footer">
              <div className="footer-inner">
                  Portfolio site for Tyler Akin.
                  Based in Louisville, Kentucky.
                  Built using ReactJS.
              </div>
            </footer>
        );
    }
}

// Export app function to use it in index.js
export default Footer;
