import React from 'react';
import PageTitle from '../PageTitle';
import PortfolioMenu from './PortfolioMenu';

// Primary ReactJs Function
function Portfolio(props) {
        // Enclosing tag in the return necesssary when adjacent elements used
    return (
        <div className="page-content">
            <PortfolioMenu />
        </div>
    );

}

// Export app function to use it in index.js
export default Portfolio;
