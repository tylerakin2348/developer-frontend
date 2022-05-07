import React, { Component } from "react";
import "./assets/css/footer.css";
// import Backenddata from './backenddata';

// Primary ReactJs Function
function Footer() {
  return (
    // React functions are included in "return"
    // Write HTML as normal
    <footer className="footer">
      <div className="footer-inner">
        Built in Louisville, Kentucky.
        <br></br>© {new Date().getFullYear()} Tyler Akin. All Rights Reserved.
        <br></br>a{" "}
        <a className="footer-link" href="https://tylerakin.com">
          tylerakin.com
        </a>{" "}
        site.
      </div>
    </footer>
  );
}
// Export app function to use it in index.js
export default Footer;
