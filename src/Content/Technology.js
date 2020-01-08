import React from 'react';
import PageTitle from '../PageTitle';
import '../assets/css/technology/technology.css';

// Primary ReactJs Function
function Technology(props) {
        // Enclosing tag in the return necesssary when adjacent elements used
    return (
        <div className="page-content technology">
            <div className="contain">
                <div className="technology-sector">
                    <h2>Languages and Frameworks</h2>
                    <div className="technology-sector--inner">
                        <div>HTML5</div>
                        <div>CSS3</div>
                        <div>SCSS</div>
                        <div>PHP7</div>
                        <div>JavaScript</div>
                        <div>JQuery</div>
                        <div>ReactJS</div>
                        <div>VueJs</div>
                    </div>
                </div>

                <div className="technology-sector">
                    <h2>Platforms and CMS</h2>
                    <div className="technology-sector--inner">
                        <div>WordPress</div>
                        <div>Shopify</div>
                        <div>PrestaShop</div>
                    </div>
                </div>

                <div className="technology-sector">
                    <h2>Design and Visual</h2>
                    <div className="technology-sector--inner">
                        <div>Illustrator</div>
                        <div>Photoshop</div>
                        <div>Affinity Designer</div>
                        <div>Affinity Photo</div>
                        <div>Premier Pro</div>
                        <div>After Effects</div>
                    </div>
                </div>
            </div>
        </div>
    );

}

// Export app function to use it in index.js
export default Technology;
