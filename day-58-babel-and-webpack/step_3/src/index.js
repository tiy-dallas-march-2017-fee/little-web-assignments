import ReactDOM from 'react-dom';
import React from 'react';
import OtherComponent from './OtherComponent.js';

class App extends React.Component {

  render() {
    return (
      <div>
        Dude
        <OtherComponent />
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('root'));
