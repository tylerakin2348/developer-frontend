import { Link } from "react-router-dom";
import "../assets/css/technology/technology.css";
import { motion } from "framer-motion";

// Primary ReactJs Function
function WorkByTechnology() {
  function handleWorkMenuClick(event) {
    const navigation = document.querySelector(".technology-navigation");

    if (!navigation) {
      return;
    }

    if (navigation.classList.contains("slideMenuIn")) {
      navigation.classList.remove("slideMenuIn");
      return;
    }

    navigation.classList.add("slideMenuIn");
  }

  return (
    <nav className="technology-navigation">
      <motion.div
        className="actions"
        initial={{ opacity: 0, transform: "translate(0%,-100%)" }}
        animate={{ opacity: 1, transform: "translate(0%,0%)" }}
        transition={{
          opacity: { duration: 1.5 },
          transform: { duration: 0.35 },
        }}
      >
        <ul>
          <li>
            <Link
              to="/work/technology"
              className="main-menu__item"
              onClick={handleWorkMenuClick}
            >
              By Technology
            </Link>
          </li>
          <li>
            <Link
              to="/work/portfolio"
              className="main-menu__item"
              onClick={handleWorkMenuClick}
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
}

// Export app function to use it in index.js
export default WorkByTechnology;
