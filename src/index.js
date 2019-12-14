// First, import ReactJs files. Two necessary.
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';

// Import css file
import './css/index.css';

// Import the react instance
import App from './App';

// Attach the app (and render it) in index.html
ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
),
document.getElementById('root'));
