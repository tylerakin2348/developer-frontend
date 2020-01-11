import React from 'react';
import PageTitle from '../PageTitle';
import { motion } from "framer-motion"

// Primary ReactJs Function
function KaoCollinsPortfolioPiece(props) {
        // Enclosing tag in the return necesssary when adjacent elements used
    return (
        <div className="page-content kao-collins-portfolio contain">
            <motion.div
                className="actions"
                initial={{ opacity: 0, transform:'translate(0%,-100%)' }}
                animate={{ opacity: 1,transform:'translate(0%,0%)' }}
                transition={{ opacity: { duration: 1.5 }, transform: { duration: .35 } }}>

                <PageTitle name="Kao Collins Inc." />

                <p>Kao Collins Inc. is a subsidiary of Kao, which is a worldwide corporation based in Japan. A commerical inks company, Kao Collins needed a site solution that effectively communicated their large inventory while also presenting a pleasing visual experience that demonstrates the advanced nature of their inks.</p>
                <a href="https://www.kaocollins.com/" target="_blank">Visit the site</a>
            </motion.div>
        </div>
    );

}

// Export app function to use it in index.js
export default KaoCollinsPortfolioPiece;
