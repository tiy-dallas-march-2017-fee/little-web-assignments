import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './index.css';
import App from './App.js';
import Gallery from './Gallery.js';

const Home = () => {
  return (
    <div>
      <p>This is a Todo application. It is sample code that shows React, React Router, and API interactions.</p>
    </div>
  )
}

ReactDOM.render(
  <Router>
    <div className="container">
      <header>
        <h1>Best Todo App Ever</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/app">App</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </nav>
      </header>
      <div className="contents">
        <Route path="/" exact component={Home} />
        <Route path="/app" component={App} />
        <Route path="/gallery" component={Gallery} />
      </div>
    </div>
  </Router>,
  document.getElementById('root')
);
