import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Counter from './Counter.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Link to="/counter">Counter</Link>

          <Route path="/counter" component={Counter} />
        </div>
      </Router>
    );
  }
}

export default App;
