import React from 'react';
import PageTitle from '../PageTitle';

// Primary ReactJs Function
function AboutPageContent(props) {
        // Enclosing tag in the return necesssary when adjacent elements used
    return (
        <div className="page-content">
            <PageTitle name="About" />
            <div>About Page Content</div>
        </div>
    );

}

// Export app function to use it in index.js
export default AboutPageContent;
