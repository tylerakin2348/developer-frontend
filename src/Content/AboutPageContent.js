import React from 'react';
import PageTitle from '../PageTitle';

// Primary ReactJs Function
function AboutPageContent(props) {
        // Enclosing tag in the return necesssary when adjacent elements used
    return (
        <div className="page-content about contain">
            <PageTitle name="A developer at heart" />
            <div>Writing something that works captures my desire for creation. Crafting functionality that presents content for users taps my desire to create and evoke an effect.</div>
        </div>
    );

}

// Export app function to use it in index.js
export default AboutPageContent;
