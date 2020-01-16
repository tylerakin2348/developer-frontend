// Also requires react import, but no react dom
import React from 'react';

// Import Header Components
import LearnReactHeader from './LearnReactContent/LearnReactHeader';
import LearnReactMainContent from './LearnReactContent/LearnReactMainContent';
import LearnReactFooter from './LearnReactContent/LearnReactFooter'

import './assets/css/learnreactstyling/reactstyling.css';

// Primary ReactJs Function
class LearnReactApp extends React.Component {
    render() {
        return (
            <div className="react-test-app">
              <LearnReactHeader />
              <LearnReactMainContent />
              <LearnReactFooter />
            </div>
        );
    }
}

// Export app function to use it in index.js
export default LearnReactApp;
