import React from 'react';
import { Link } from 'react-router-dom';

// Primary ReactJs Function
function PorfolioMenu(props) {

    return (
        <nav className="portfolio-menu">
            <ul>
                <li>
                    <div className="portfolio-image">
                        <img src="../audubon-sanctuary.png" alt="audubon baptist church sanctuary" />
                    </div>
                    <Link to="/work/portfolio/audubon-baptist" className="main-menu__item">Audubon Baptist Church</Link>
                </li>
                <li>
                    <div className="portfolio-image">
                        <img src="../ker-horse.png" alt="ker horse photo" />
                    </div>
                    <Link to="/work/portfolio/ker" className="main-menu__item">Kentucky Equine Research</Link>
                </li>
                <li>
                    <div className="portfolio-image">
                        <img src="../wheat-field.png" alt="wheat field photo" />
                    </div>
                    <Link to="/work/portfolio/legacy-food-and-feeds" className="main-menu__item">Legacy Food and Feeds</Link>
                </li>
                <li>
                    <div className="portfolio-image">
                        <img src="../kao-ink.png" alt="kao ink photo" />
                    </div>
                    <Link to="/work/portfolio/kao-collins" className="main-menu__item">Kao Collins Inc</Link>
                </li>
                <li>
                    <div className="portfolio-image">
                        <img src="../zeon-chemicals-road.png" alt="zeon chemicals road photo" />
                    </div>
                    <Link to="/work/portfolio/zeon-chemicals" className="main-menu__item">Zeon Chemicals</Link>
                </li>
                <li>
                    <div className="portfolio-image">
                        <img src="../oils.jpg" alt="oils photo" />
                    </div>
                    <Link to="/work/portfolio/health-connection" className="main-menu__item">A Health Connection</Link>
                </li>
            </ul>
        </nav>
    );

}

// Export app function to use it in index.js
export default PorfolioMenu;
