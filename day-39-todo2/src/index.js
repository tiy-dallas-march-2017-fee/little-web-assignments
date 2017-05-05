import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TodoApp from './TodoApp.js';

const Home = () => <div>Home stuff goes here</div>
const Gallery = () => <div>Gallery</div>

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/app" component={TodoApp} />
          <Route path="/gallery" component={Gallery} />
        </div>
      </Router>
    );
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
