import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import SimpleList from './SimpleList.js';
//import ListFromInput from './ListFromInput.js';
import NameList from './NameList.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <NameList />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
