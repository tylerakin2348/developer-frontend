import React from 'react';
import PageTitle from '../PageTitle';

// Primary ReactJs Function
function Contact(props) {
        // Enclosing tag in the return necesssary when adjacent elements used
    return (
        <div className="page-content contact contain">
            <PageTitle name="Contact" />
            <div>Contact me for more information about my work and how it can intersect your needs. I love learning about new project ideas. </div>
        </div>
    );

}

// Export app function to use it in index.js
export default Contact;
