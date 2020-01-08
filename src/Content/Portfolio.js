import React from 'react';
import PageTitle from '../PageTitle';
import PortfolioMenu from './PortfolioMenu';
import { motion } from "framer-motion"

import '../assets/css/portfolio/portfolio-menu.css';

// Primary ReactJs Function
function Portfolio(props) {
        // Enclosing tag in the return necesssary when adjacent elements used
    return (
        <div className="page-content portfolio">
            <motion.div
                className="actions"
                initial={{ opacity: 0, transform:'translate(0%,-100%)' }}
                animate={{ opacity: 1,transform:'translate(0%,0%)' }}
                transition={{ opacity: { duration: 1.5 }, transform: { duration: .35 } }}>

                <div className="contain">
                    <PageTitle name="Work. Done." />
                    Learn more about projects I have worked on during my career.
                </div>
                <PortfolioMenu />

            </motion.div>

        </div>
    );

}

// Export app function to use it in index.js
export default Portfolio;
