import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import SimpleList from './SimpleList.js';
//import ListFromInput from './ListFromInput.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <SimpleList />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
