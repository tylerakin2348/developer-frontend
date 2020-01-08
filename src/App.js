// Also requires react import, but no react dom
import React from 'react';

// Import components used below
    // Names logo here
import './assets/css/app.css';

// Import Header Components
import Header from './Header';
import PageContent from './PageContent';
import Footer from './Footer';

// Primary ReactJs Function
function App() {
  return ( // React functions are included in "return"

  // Write HTML as normal
  // Include ReactJs components
    <div className="App">

      <Header />

      <PageContent />

      <Footer />

    </div>
  );
}

// Export app function to use it in index.js
export default App;
