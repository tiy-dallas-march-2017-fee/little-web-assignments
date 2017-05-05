import React from 'react';
import { Link } from 'react-router-dom';

class Master extends React.Component {

  render() {

    const items = this.props.inventory.map((x) => {
      return <li key={x.id}>
              <Link to={'/viewdetail/' + x.id}>{x.name}</Link>
             </li>
    });

    return (
      <div>
        <ol>
          {items}
        </ol>
      </div>
    );
  }

}

module.exports = Master;
