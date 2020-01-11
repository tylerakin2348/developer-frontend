import React from 'react';
import PageTitle from '../PageTitle';
import { motion } from "framer-motion"

// Primary ReactJs Function
function ZeonPortfolioPiece(props) {
        // Enclosing tag in the return necesssary when adjacent elements used
    return (
        <div className="page-content zeo-chemicals-portfolio contain">
            <motion.div
                className="actions"
                initial={{ opacity: 0, transform:'translate(0%,-100%)' }}
                animate={{ opacity: 1,transform:'translate(0%,0%)' }}
                transition={{ opacity: { duration: 1.5 }, transform: { duration: .35 } }}>

                <PageTitle name="Zeon Chemicals" />

                <p>Zeon Chemicals is an elastomer company that provides their products around the world. Zeon needed a new site solution that effectively presented their products to users.</p>
                <a href="https://www.zeonchemicals.com/" target="_blank">Visit the site</a>
            </motion.div>
        </div>
    );

}

// Export app function to use it in index.js
export default ZeonPortfolioPiece;
