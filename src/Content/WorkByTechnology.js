import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/technology/technology.css';
import { motion } from "framer-motion"

// Primary ReactJs Function
function WorkByTechnology(props) {
        // Enclosing tag in the return necesssary when adjacent elements used
        function activate_work_menu(e) {
            let clickTarget = e.target;
            let work_menu = document.querySelector('.technology-navigation');

            if (clickTarget) {
                work_menu.classList.add('slideMenuIn');
            }
            work_menu.classList.remove('slideMenuIn');
        }


    return (
        <nav className="technology-navigation">
            <motion.div
                className="actions"
                initial={{ opacity: 0, transform:'translate(0%,-100%)' }}
                animate={{ opacity: 1,transform:'translate(0%,0%)' }}
                transition={{ opacity: { duration: 1.5 }, transform: { duration: .35 } }}>

                <ul>
                    <li>
                        <Link to="/work/technology" className="main-menu__item" onClick={activate_work_menu}>By Technology</Link>
                    </li>
                    <li>
                        <Link to="/work/portfolio" className="main-menu__item" onClick={activate_work_menu}>Portfolio</Link>
                    </li>
                </ul>
            </motion.div>
        </nav>
    );

}

// Export app function to use it in index.js
export default WorkByTechnology;
