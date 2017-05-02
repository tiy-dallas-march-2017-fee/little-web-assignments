import React from 'react';
import './query.css';

class Query extends React.Component {

  render() {
    return (
      <div className="query-bar">
        <input placeholder="Search Query" />
      </div>
    );
  }

}

module.exports = Query;
