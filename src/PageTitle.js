import React from 'react';

// Primary ReactJs Function
function PageTitle(props) {
  return ( // React functions are included in "return"
  // Write HTML as normal
    <h1 className="Page-Title">
        {props.name}
    </h1>
  );
}

// Export app function to use it in index.js
export default PageTitle;
