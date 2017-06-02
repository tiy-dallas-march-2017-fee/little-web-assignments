import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CanvasExample from './CanvasExample.js';
import GoogleMapsExample from './GoogleMapsExample.js';
import GoogleMapsChange from './GoogleMapsChange.js';

const Home = (props) => {
  return (
    <div>
      <h1>refs Examples</h1>
      <p>This project is to show you good examples of where <code>refs</code> are useful.</p>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/canvas">Canvas</Link></li>
            <li><Link to="/map">Google Maps</Link></li>
            <li><Link to="/map2">Dynampic Google Map</Link></li>
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/canvas" component={CanvasExample} />
          <Route path="/map" component={GoogleMapsExample} />
          <Route path="/map2" component={GoogleMapsChange} />
        </div>
      </Router>
    );
  }
}

export default App;
