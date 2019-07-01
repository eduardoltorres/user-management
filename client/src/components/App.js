import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import User from './User';

function App() {
  return (
    <Router>
      <Route path={['/', '/users']} exact component={Home} />
      {/* <Route path="/users" exact component={Home} /> */}
      <Route path="/users/:userId" exact component={User} />
    </Router>
  );
}

export default App;
