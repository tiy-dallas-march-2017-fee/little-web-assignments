import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Warmup from './Warmup.js';
//import GithubRepositories from './GithubRepositories';
//import AList from './AList.js';

class App extends React.Component {

  render() {
    return (
      <div>
        <Warmup />
      </div>
    );
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);
