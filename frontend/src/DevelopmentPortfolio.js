// Also requires react import, but no react dom
import React from 'react';

// Import Header Components
import Header from './Header';
import PageContent from './PageContent';
import Footer from './Footer';

// Primary ReactJs Function
class DevelopmentPortfolio extends React.Component {
    render() {
        return (
            <div className="App">
              <Header />

              <PageContent />

              <Footer />
            </div>
        );
    }
}

// Export app function to use it in index.js
export default DevelopmentPortfolio;
