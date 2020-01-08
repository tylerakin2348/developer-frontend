import React from 'react';
import { Link } from 'react-router-dom';

import './assets/css/main-menu.css';

function MainMenu(props) {

  function current_page_link(e) {
     let testElements = document.querySelectorAll('.main-menu__item');
     let set_active_menu_state = document.querySelector('.App-header');
      let current_element = e.target;
      let current_element_parent = current_element.parentNode;
      set_active_menu_state.classList.remove('first-element-selected');

     for ( let testElement = 0; testElement < testElements.length; testElement++ ) {
         let parentElement = testElements[testElement].parentNode;

         if (current_element_parent.classList.contains('first-menu-item')) {
             set_active_menu_state.classList.add('first-element-selected');
        }


         parentElement.classList.remove('active');
     }

     current_element_parent.classList.add('active');

     set_active_menu_state.classList.add('active-menu-state');
  }

  return ( // React functions are included in "return"
  // Write HTML as normal
  <nav className="Main-Menu-navigation">
    <ul>
        <li className="first-menu-item">
            <img src="../coffee.jpg" alt="coffee photo" />
            <Link to="/" className="main-menu__item" onClick={current_page_link}>Home</Link>
        </li>
        <li>
            <img src="../aboutphoto.jpg" alt="about photo" />
            <Link to="/about-tyler" className="main-menu__item" onClick={current_page_link}>About Tyler</Link>
        </li>
        <li>
            <img src="../computer.jpg" alt="computer photo" />
            <Link to="/work" className="main-menu__item" onClick={current_page_link}>My Work</Link>
        </li>
        <li>
            <img src="../coffee.jpg" alt="coffee photo" />
            <Link to="/contact" className="main-menu__item" onClick={current_page_link}>Contact Me</Link>
        </li>
    </ul>
  </nav>
  );
}

// Export app function to use it in index.js
export default MainMenu;
