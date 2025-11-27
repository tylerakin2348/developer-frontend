import { Link } from "react-router-dom";
import "./assets/css/main-menu.css";

const ABOUT_PHOTO = `${process.env.PUBLIC_URL}/aboutphoto.jpg`;
const WORK_PHOTO = `${process.env.PUBLIC_URL}/computer.jpg`;
const CONTACT_PHOTO = `${process.env.PUBLIC_URL}/coffee.jpg`;

function MainMenu() {
  function setActiveMenuState(target) {
    const header = document.querySelector(".App-header");
    const menuItems = document.querySelectorAll(".main-menu__item");

    header?.classList.remove("at-start-page");
    header?.classList.add("site-entered");

    menuItems.forEach((item) => item.classList.remove("current-page"));
    target.classList.add("current-page");
  }

  function handleSiteEntered(event) {
    const target = event.currentTarget;
    if (target) {
      setActiveMenuState(target);
    }
  }

  return (
    <nav className="Main-Menu-navigation">
      <ul>
        <li>
          <img src={ABOUT_PHOTO} alt="About Tyler" />
          <Link
            to="/about-tyler"
            className="main-menu__item"
            onClick={handleSiteEntered}
          >
            About Tyler
          </Link>
        </li>
        <li>
          <img src={WORK_PHOTO} alt="My work" />
          <Link
            to="/work"
            className="main-menu__item"
            onClick={handleSiteEntered}
          >
            My Work
          </Link>
        </li>
        <li>
          <img src={CONTACT_PHOTO} alt="Contact" />
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
  );
}

export default MainMenu;
