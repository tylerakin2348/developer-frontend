import React from 'react';
import PageTitle from '../PageTitle';
import { motion } from "framer-motion"

// Primary ReactJs Function
function KerPortfolioPiece(props) {
        // Enclosing tag in the return necesssary when adjacent elements used
    return (
        <div className="page-content ker-portfolio contain">
            <motion.div
                className="actions"
                initial={{ opacity: 0, transform:'translate(0%,-100%)' }}
                animate={{ opacity: 1,transform:'translate(0%,0%)' }}
                transition={{ opacity: { duration: 1.5 }, transform: { duration: .35 } }}>

                <PageTitle name="Kentucky Equine Research" />

                <p>Kentucky Equine Research (KER) modernized their online presence with a new site that incorporated not only information about the company but presented their large library of articles and resources. Such content required a specialized search to be built for search particular components of the site. I was responsible for much of the visual styling work on the site as well as structural components being built out.</p>

                <a href="https://ker.com/" target="_blank">Visit the site</a>
            </motion.div>
        </div>
    );

}

// Export app function to use it in index.js
export default KerPortfolioPiece;
