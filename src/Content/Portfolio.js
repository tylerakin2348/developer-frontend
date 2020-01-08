import React from 'react';
import PageTitle from '../PageTitle';
import PortfolioMenu from './PortfolioMenu';

import '../assets/css/portfolio/portfolio-menu.css';

// Primary ReactJs Function
function Portfolio(props) {
        // Enclosing tag in the return necesssary when adjacent elements used
    return (
        <div className="page-content portfolio">
            <div className="contain">
                <PageTitle name="Work. Done." />
                Learn more about projects I have worked on during my career.
            </div>
            <PortfolioMenu />
        </div>
    );

}

// Export app function to use it in index.js
export default Portfolio;
