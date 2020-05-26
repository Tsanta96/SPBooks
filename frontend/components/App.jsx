import React from 'react';

import Home from './Home/Home_container';

//If there were more views, I would add routes here and wrap the top level <Root> Component in a 
//HashRouter
const App = () => (
  <div>
    <Home />
  </div>
);

export default App;