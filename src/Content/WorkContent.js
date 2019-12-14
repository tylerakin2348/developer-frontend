import React from 'react';
import PageTitle from '../PageTitle';
import WorkByTechnology from './WorkByTechnology';

// Primary ReactJs Function
function WorkContent(props) {
        // Enclosing tag in the return necesssary when adjacent elements used
    return (
        <div className="page-content">
            <WorkByTechnology />
        </div>
    );

}

// Export app function to use it in index.js
export default WorkContent;
