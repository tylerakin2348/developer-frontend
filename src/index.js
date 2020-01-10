// First, import ReactJs files. Two necessary.
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

// Import css file

// Import the react instance
import App from './App';
import App2 from './App2';

// Attach the app (and render it) in index.html
ReactDOM.render((
    <BrowserRouter>
        <App />
        <App2 />
    </BrowserRouter>
),
document.getElementById('root'));
