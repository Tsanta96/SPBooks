import React from 'react';
import { Route } from 'react-router-dom';

import Home from './Home/Home_container';
import BookDisplay from './BookDisplay/BookDisplay_container';

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/books/:isbn" component={BookDisplay} /> 
  </div>
);

export default App;