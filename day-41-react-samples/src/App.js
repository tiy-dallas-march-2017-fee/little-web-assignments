import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Counter from './Counter.js';
import Advancer from './Advancer.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Link to="/counter">Counter</Link>
          <Link to="/advancer">Advancer</Link>

          <Route path="/counter" component={Counter} />
          <Route path="/advancer" component={Advancer} />
        </div>
      </Router>
    );
  }
}

export default App;
