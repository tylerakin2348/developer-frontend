import { Link } from "react-router-dom";
import MainMenu from "./MainMenu";

function markHomeActive(target) {
  const header = document.querySelector(".App-header");
  const menuItems = document.querySelectorAll(
    ".main-header-content .main-menu__item"
  );

  header?.classList.remove("site-entered");
  header?.classList.add("at-start-page");

  menuItems.forEach((item) => item.classList.remove("current-page"));
  target.classList.add("current-page");
}

function markSiteEntered(target) {
  const header = document.querySelector(".App-header");
  const menuItems = document.querySelectorAll(".main-menu__item");

  header?.classList.remove("at-start-page");
  header?.classList.add("site-entered");

  menuItems.forEach((item) => item.classList.remove("current-page"));
  target.classList.add("current-page");
}

function Header() {
  const handleHomeLink = (event) => {
    const target = event.currentTarget;
    if (target) {
      markHomeActive(target);
    }
  };

  const handleSiteEntered = (event) => {
    const target = event.currentTarget;
    if (target) {
      markSiteEntered(target);
    }
  };

  return (
    <header className="App-header at-start-page">
      <div className="main-header-content">
        <div className="site-logo">Tyler Akin</div>
        <Link
          to="/"
          className="go-to-start-page"
          onClick={handleHomeLink}
        >
          Back Home
          <span className="assistive">Go to the homepage</span>
        </Link>

        <nav>
          <ul>
            <li>
              <Link
                to="/"
                className="main-menu__item"
                onClick={handleHomeLink}
              >
                Home
                <span className="assistive">Click to expand menu.</span>
              </Link>
            </li>
            <li>
              <Link
                to="/about-tyler"
                className="main-menu__item"
                onClick={handleSiteEntered}
              >
                About Tyler
              </Link>
            </li>
            <li>
              <Link
                to="/work"
                className="main-menu__item"
                onClick={handleSiteEntered}
              >
                My Work
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="main-menu__item"
                onClick={handleSiteEntered}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <MainMenu />
    </header>
  );
}

export default Header;
