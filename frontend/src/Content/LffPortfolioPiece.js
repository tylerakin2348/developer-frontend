import React from 'react';
import PageTitle from '../PageTitle';
import { motion } from "framer-motion"

// Primary ReactJs Function
function LffPortfolioPiece(props) {
        // Enclosing tag in the return necesssary when adjacent elements used
    return (
        <div className="page-content lff-portfolio contain">
            <motion.div
                className="actions"
                initial={{ opacity: 0, transform:'translate(0%,-100%)' }}
                animate={{ opacity: 1,transform:'translate(0%,0%)' }}
                transition={{ opacity: { duration: 1.5 }, transform: { duration: .35 } }}>

                <PageTitle name="Legacy Food and Feeds" />

                <p>Legacy Food and Feeds is a Louisville, family-run bulk foods business. Online orders are later delivered to customers at specified "drop points" around the city. LFF needed an e-commerce solution with product management and delivery control. Using the Shopify, I created a solution that has proven a consistent solution for the needs of this company.</p>
                <a href="https://www.legacyfoodandfeeds.com/" target="_blank">Visit the site</a>
            </motion.div>
        </div>
    );

}

// Export app function to use it in index.js
export default LffPortfolioPiece;
