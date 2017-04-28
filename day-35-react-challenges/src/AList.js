import React from 'react';

class AList extends React.Component {

  constructor() {
    super();

    this.state = {
      words: ['Longing', 'Rusted', 'Seventeen', 'Daybreak', 'Furnace', 'Nine', 'Benign', 'Homecoming', 'One', 'Freight Car']
    }
  }

  render() {

    var list = this.state.words.map((x, i) => {
      return <li key={i}>{x}</li>
    });

    return (
      <div>
        <ol>
          {list}
        </ol>
      </div>
    )
  }
}

module.exports = AList;
