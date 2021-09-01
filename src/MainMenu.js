import React from "react";
import { Link } from "react-router-dom";
import "./assets/css/main-menu.css";

function MainMenu(props) {
  function site_entered(e) {
    let testElements = document.querySelectorAll(".main-menu__item");
    let set_active_menu_state = document.querySelector(".App-header");
    let current_element = e.target;
    let current_element_parent = current_element.parentNode;
    set_active_menu_state.classList.remove("at-start-page");
    set_active_menu_state.classList.add("site-entered");

    for (
      let testElement = 0;
      testElement < testElements.length;
      testElement++
    ) {
      testElements[testElement].classList.remove("current-page");
    }
    current_element.classList.add("current-page");
  }

  return (
    // React functions are included in "return"
    // Write HTML as normal
    <nav className="Main-Menu-navigation">
      <ul>
        <li>
          <img src="../aboutphoto.jpg" alt="about photo" />
          <Link
            to="/about-tyler"
            className="main-menu__item"
            onClick={site_entered}
          >
            About Tyler
          </Link>
        </li>
        <li>
          <img src="../computer.jpg" alt="computer photo" />
          <Link to="/work" className="main-menu__item" onClick={site_entered}>
            My Work
          </Link>
        </li>
        <li>
          <img src="../coffee.jpg" alt="coffee photo" />
          <Link
            to="/contact"
            className="main-menu__item"
            onClick={site_entered}
          >
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
}

// Export app function to use it in index.js
export default MainMenu;
