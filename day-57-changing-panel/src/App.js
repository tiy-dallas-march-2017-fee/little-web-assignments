import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const PageOne = () => { return (
  <div>
    <ul>
      <li><Link to="/other/7654">Nav to other panel #1</Link></li>
      <li><Link to="/other/4">Nav to other panel #2</Link></li>
      <li><Link to="/other/4">Nav to other panel #3</Link></li>
      <li><Link to="/other/5767">Nav to other panel #4</Link></li>
    </ul>
  </div>
)}

//The secondary page for the right pane
class PageTwo extends React.Component {
  render() {
    return <div>You clicked on id: {this.props.match.params.id}</div>;
  }
}

//This gives the component all the powers of the router, so you can see the params id
const PageTwoWithRouter = withRouter(PageTwo);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="main">
            <p>Always on here</p>
          </div>

          <div className="side">
            <Route path="/" exact component={PageOne} />
            <Route path="/other/:id" component={PageTwoWithRouter} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
