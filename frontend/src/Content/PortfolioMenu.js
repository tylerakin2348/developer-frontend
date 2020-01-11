import React from 'react';
import { Link } from 'react-router-dom';
import { motion, staggerChildren } from "framer-motion"
import '../assets/css/portfolio/portfolio-menu.css';

// Primary ReactJs Function
function PorfolioMenu(props) {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: .75,
                velocity: 2
            }
        }
    }

    const item = {
        hidden: { opacity: 0, transform:'translate(0%,-100%)' },
        show: { opacity: 1,transform:'translate(0%,0%)' }
    }

    return (
        <div className="portfolio-content-wrapper">
            <nav className="portfolio-menu">
                <motion.ul
                    className="actions"
                    variants={container}
                    initial="hidden"
                    animate="show">
                    <motion.li variants={item}>
                        <div className="portfolio-image">
                            <span className="work-type">Freelance</span>
                            <img src="../audubon-sanctuary.png" alt="audubon baptist church sanctuary" />
                        </div>
                        <Link to="/work/portfolio/audubon-baptist" className="main-menu__item">Audubon Baptist Church</Link>
                    </motion.li>
                    <motion.li variants={item}>
                        <div className="portfolio-image">
                            <span className="work-type">Agency</span>
                            <img src="../ker-horse.png" alt="ker horse photo" />
                        </div>
                        <Link to="/work/portfolio/ker" className="main-menu__item">Kentucky Equine Research</Link>
                    </motion.li>
                    <motion.li variants={item}>
                        <div className="portfolio-image">
                            <span className="work-type">Freelance</span>
                            <img src="../wheat-field.png" alt="wheat field photo" />
                        </div>
                        <Link to="/work/portfolio/legacy-food-and-feeds" className="main-menu__item">Legacy Food and Feeds</Link>
                    </motion.li>
                    <motion.li variants={item}>
                        <div className="portfolio-image">
                            <span className="work-type">Agency</span>
                            <img src="../kao-ink.png" alt="kao ink photo" />
                        </div>
                        <Link to="/work/portfolio/kao-collins" className="main-menu__item">Kao Collins Inc</Link>
                    </motion.li>
                    <motion.li variants={item}>
                        <div className="portfolio-image">
                            <span className="work-type">Agency</span>
                            <img src="../zeon-chemicals-road.png" alt="zeon chemicals road photo" />
                        </div>
                        <Link to="/work/portfolio/zeon-chemicals" className="main-menu__item">Zeon Chemicals</Link>
                    </motion.li>
                    <motion.li variants={item}>
                        <div className="portfolio-image">
                            <span className="work-type">Freelance</span>
                            <img src="../oils.jpg" alt="oils photo" />
                        </div>
                        <Link to="/work/portfolio/health-connection" className="main-menu__item">A Health Connection</Link>
                    </motion.li>
                </motion.ul>
            </nav>
        </div>
    );

}

// Export app function to use it in index.js
export default PorfolioMenu;
