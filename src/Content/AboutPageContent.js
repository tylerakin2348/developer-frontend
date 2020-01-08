import React from 'react';
import PageTitle from '../PageTitle';
import {Spring} from 'react-spring/renderprops';
import { motion } from "framer-motion"

// Primary ReactJs Function
function AboutPageContent(props) {
        // Enclosing tag in the return necesssary when adjacent elements used


    return (
        <div className="page-content about contain">

            <motion.div
                className="actions"
                initial={{ opacity: 0, transform:'translate(0%,-100%)' }}
                animate={{ opacity: 1,transform:'translate(0%,0%)' }}
                transition={{ opacity: { duration: 1.5 }, transform: { duration: .35 } }}>

                <PageTitle name="A developer at heart" />

                <div>Writing something that works captures my desire for creation. Crafting functionality that presents content for users taps my desire to create and evoke an effect.</div>

                <h2>About This Site</h2>

                <div>tylerakin.com is the development porfolio site for Tyler Akin, a developer focused largely on Front-End Development—in the Louisville, Kentucky region. This site is designed as a single-page application using the ReactJs framework. </div>
            </motion.div>
        </div>
    );

}

// Export app function to use it in index.js
export default AboutPageContent;
