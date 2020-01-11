import React from 'react';
import { Link } from 'react-router-dom';

import MainMenu from './MainMenu';

  function home_page_link(e) {
     let testElements = document.querySelectorAll('.main-header-content .main-menu__item');
     let set_active_menu_state = document.querySelector('.App-header');
     set_active_menu_state.classList.remove('site-entered');

      let current_element = e.target;
      let current_element_parent = current_element.parentNode;

     for ( let testElement = 0; testElement < testElements.length; testElement++ ) {
         testElements[testElement].classList.remove('current-page');
         let parentElement = testElements[testElement].parentNode;
         set_active_menu_state.classList.add('at-start-page');
     }
     current_element.classList.add('current-page');
  }
  function site_entered(e) {
     let testElements = document.querySelectorAll('.main-menu__item');
     let set_active_menu_state = document.querySelector('.App-header');
      let current_element = e.target;
      let current_element_parent = current_element.parentNode;
      set_active_menu_state.classList.remove('at-start-page');
      set_active_menu_state.classList.add('site-entered');

      for ( let testElement = 0; testElement < testElements.length; testElement++ ) {
          testElements[testElement].classList.remove('current-page');
      }
      current_element.classList.add('current-page');
  }

// Primary ReactJs Function
function Header() {
  return ( // React functions are included in "return"
  // Write HTML as normal
      <header className="App-header at-start-page">
        <div className="main-header-content">
            <div className="site-logo">
                Tyler Akin
            </div>
            <Link to="/" className="go-to-start-page" onClick={home_page_link}>
                Back Home
                <span className="assistive">
                    Go to the homepage
                </span>
            </Link>

            <nav>
                <ul>
                    <li>
                        <Link to="/" className="main-menu__item" onClick={home_page_link}>
                            Home
                            <span className="assistive">
                                Click to expand menu.
                            </span>
                        </Link>

                    </li>
                    <li>
                        <Link to="/about-tyler" className="main-menu__item" onClick={site_entered}>About Tyler</Link>
                    </li>
                    <li>
                        <Link to="/work" className="main-menu__item" onClick={site_entered}>My Work</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="main-menu__item" onClick={site_entered}>Contact Me</Link>
                    </li>
                </ul>
            </nav>
        </div>
        <MainMenu />
      </header>
  );
}

// Export app function to use it in index.js
export default Header;
