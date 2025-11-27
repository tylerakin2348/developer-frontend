import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../assets/css/portfolio/portfolio-menu.css";

const PORTFOLIO_ITEMS = [
  {
    slug: "audubon-baptist",
    name: "Audubon Baptist Church",
    workType: "Freelance",
    image: "audubon-sanctuary.png",
    alt: "Audubon Baptist Church sanctuary",
  },
  {
    slug: "ker",
    name: "Kentucky Equine Research",
    workType: "Agency",
    image: "ker-horse.png",
    alt: "Kentucky Equine Research immersive imagery",
  },
  {
    slug: "legacy-food-and-feeds",
    name: "Legacy Food and Feeds",
    workType: "Freelance",
    image: "wheat-field.png",
    alt: "Midwestern wheat field at sunset",
  },
  {
    slug: "kao-collins",
    name: "Kao Collins Inc",
    workType: "Agency",
    image: "kao-ink.png",
    alt: "Kao Collins ink bottles",
  },
  {
    slug: "zeon-chemicals",
    name: "Zeon Chemicals",
    workType: "Agency",
    image: "zeon-chemicals-road.png",
    alt: "Zeon Chemicals facility",
  },
  {
    slug: "health-connection",
    name: "A Health Connection",
    workType: "Freelance",
    image: "oils.jpg",
    alt: "Essential oils on a tabletop",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.75,
      velocity: 2,
    },
  },
};

const item = {
  hidden: { opacity: 0, transform: "translate(0%,-100%)" },
  show: { opacity: 1, transform: "translate(0%,0%)" },
};

function getImageUrl(fileName) {
  return `${process.env.PUBLIC_URL}/${fileName}`;
}

function PortfolioMenu() {
  return (
    <div className="portfolio-content-wrapper">
      <nav className="portfolio-menu">
        <motion.ul
          className="actions"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {PORTFOLIO_ITEMS.map((entry) => (
            <motion.li key={entry.slug} variants={item}>
              <div className="portfolio-image">
                <span className="work-type">{entry.workType}</span>
                <img
                  src={getImageUrl(entry.image)}
                  alt={entry.alt}
                  loading="lazy"
                />
              </div>
              <Link
                to={`/work/portfolio/${entry.slug}`}
                className="main-menu__item"
              >
                {entry.name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </div>
  );
}

export default PortfolioMenu;
