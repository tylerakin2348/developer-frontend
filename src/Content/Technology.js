import React from 'react';
import PageTitle from '../PageTitle';

// Primary ReactJs Function
function Technology(props) {
        // Enclosing tag in the return necesssary when adjacent elements used
    return (
        <div className="page-content technology contain">
            <PageTitle name="Technology" />
            <h2>Languages and Frameworks</h2>
            <div>HTML5</div>
            <div>CSS3</div>
            <div>SCSS</div>
            <div>PHP7</div>
            <div>JavaScript</div>
            <div>JQuery</div>
            <div>ReactJS</div>

            <h2>Platforms and CMS</h2>
            <div>WordPress</div>
            <div>Shopify</div>
            <div>PrestaShop</div>

            <h2>Design and Visual</h2>
            <div>Illustrator</div>
            <div>Photoshop</div>
            <div>Affinity Designer</div>
            <div>Affinity Photo</div>
            <div>Premier Pro</div>
            <div>After Effects</div>
        </div>
    );

}

// Export app function to use it in index.js
export default Technology;
