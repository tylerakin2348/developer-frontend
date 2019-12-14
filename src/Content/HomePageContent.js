import React from 'react';
import PageTitle from '../PageTitle';
import {Spring} from 'react-spring/renderprops';

// Primary ReactJs Function
function HomePageContent(props) {
    // Enclosing tag in the return necesssary when adjacent elements used
    return (
        <div className="page-content homepage">
            <PageTitle name="Tyler Akin" />
            <div>Homepage Content</div>
        </div>
    );
}

// Export app function to use it in index.js
export default HomePageContent;
