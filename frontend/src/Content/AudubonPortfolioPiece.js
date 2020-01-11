import React from 'react';
import PageTitle from '../PageTitle';
import { motion } from "framer-motion"

// Primary ReactJs Function
function AudubonPortfolioPiece(props) {
        // Enclosing tag in the return necesssary when adjacent elements used
    return (
        <div className="page-content audubon-portfolio contain">
            <motion.div
                className="actions"
                initial={{ opacity: 0, transform:'translate(0%,-100%)' }}
                animate={{ opacity: 1,transform:'translate(0%,0%)' }}
                transition={{ opacity: { duration: 1.5 }, transform: { duration: .35 } }}>

                <PageTitle name="Audubon Baptist Church" />

                <p>Audubon Baptist Church needed an online refresh. The WordPress platform was used to build a custom theme for the church. This project required content to be CMS-controled, and I utilized Carbon Fields for consistent content layouts. This theme includes a custom post type for sermons and a specialized hamburger icon.</p>
                <a href="https://www.achurchinthepark.org/" target="_blank">Visit the site</a>
            </motion.div>
        </div>
    );

}

// Export app function to use it in index.js
export default AudubonPortfolioPiece;
