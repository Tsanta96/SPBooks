import React from 'react';
import { Route } from 'react-router-dom';

import Home from './Home/Home_container';
import BookDisplay from './BookDisplay/BookDisplay_container';

//If there were more views, I would add routes here and wrap the top level <Root> Component in a 
//HashRouter
const App = () => (
  <div>
    {/* <Home /> */}
    <Route exact path="/" component={Home} />
    <Route path="/books/:isbn" component={BookDisplay} /> 
  </div>
);

export default App;