import React from 'react';

import MainMenu from './MainMenu';

// Primary ReactJs Function
function Header() {
  return ( // React functions are included in "return"
  // Write HTML as normal
      <header className="App-header">
        <MainMenu />
      </header>
  );
}

// Export app function to use it in index.js
export default Header;
