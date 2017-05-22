import React, { Component } from 'react';
import './App.css';
import BookList from './BookList.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Home extends React.Component {
  componentDidMount() {
    console.log('mounting home');
  }

  componentWillUnmount() {
    console.log('unmounting home');
  }

  render() {
    return (<div>Home yo</div>)
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/booklist">The Books</Link>
          </nav>

          <Route path="/" exact component={Home}/>
          <Route path="/booklist" component={BookList} />
        </div>
      </Router>
    );
  }
}

export default App;
