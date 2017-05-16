import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import Home from './Home';
import TodoApp from './TodoApp';
import Github from './Github';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <nav>
            <Link to="/">Home</Link>
            <Link to="/todo">Todo App</Link>
            <Link to="/github">Github</Link>
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/todo" component={TodoApp} />
          <Route path="/github" component={Github} />
        </div>
      </Router>
    );
  }
}

export default App;
