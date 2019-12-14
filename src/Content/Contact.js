import React from 'react';
import PageTitle from '../PageTitle';

// Primary ReactJs Function
function Contact(props) {
        // Enclosing tag in the return necesssary when adjacent elements used
    return (
        <div className="page-content">
            <PageTitle name="Contact" />
            <div>Contact Page Content</div>
        </div>
    );

}

// Export app function to use it in index.js
export default Contact;
