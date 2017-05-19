import React, { Component } from 'react';
import './App.css';
import SignUp from './SignUp.js';
import DoAuthedThing from './DoAuthedThing.js';
import Login from './Login.js';
import Logout from './Logout.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SignUp />
        <Login />
        <DoAuthedThing />
        <Logout />
      </div>
    );
  }
}

export default App;
