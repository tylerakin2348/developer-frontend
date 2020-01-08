import React from 'react';
import PageTitle from '../PageTitle';
import { motion } from "framer-motion"

// Primary ReactJs Function
function Contact(props) {
        // Enclosing tag in the return necesssary when adjacent elements used
    return (
        <div className="page-content contact contain">
            <motion.div
                className="actions"
                initial={{ opacity: 0, transform:'translate(0%,-100%)' }}
                animate={{ opacity: 1,transform:'translate(0%,0%)' }}
                transition={{ opacity: { duration: 1.5 }, transform: { duration: .35 } }}>

                <PageTitle name="Contact" />
                <div>Contact me for more information about my work and how it can intersect your needs. I love learning about new project ideas. </div>
            </motion.div>
        </div>
    );

}

// Export app function to use it in index.js
export default Contact;
