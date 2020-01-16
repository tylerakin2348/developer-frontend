// First, import ReactJs files. Two necessary.
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

// Import css file

// Import the react instance
import DevelopmentPortfolio from './DevelopmentPortfolio';
import LearnReactApp from './LearnReactApp';

// Attach the app (and render it) in index.html
ReactDOM.render((
    <BrowserRouter>
        <LearnReactApp />
    </BrowserRouter>
),
document.getElementById('root'));
