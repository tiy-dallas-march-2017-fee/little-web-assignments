import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Warmup from './Warmup.js';
//import GithubRepositories from './GithubRepositories';
//import AList from './AList.js';
// import SwapiPeople from './SwapiPeople.js';
import Clock from './Clock.js';
import SuperClock from './SuperClock.js';

class App extends React.Component {

  render() {
    return (
      <div>
        <Clock />


    
        <SuperClock />
      </div>
    );
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);
