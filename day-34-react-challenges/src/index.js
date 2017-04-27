import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Counter from './Counter.js';
import TickCounter from './TickCounter.js';
import Clock from './Clock.js';
// import SuperClock from './SuperClock.js';
//import RandomChuckNorris from './RandomChuckNorris.js';
import SuperDuperClock from './SuperDuperClock.js';

class App extends React.Component {

  render() {
    return (
      <div>
        <Counter />
        <TickCounter />
        <Clock />
        <SuperDuperClock />
      </div>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
