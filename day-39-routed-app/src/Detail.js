import React from 'react';

class Detail extends React.Component {

  render() {
    let person;
    for (let i = 0; i < this.props.people.length; i++) {
      if (this.props.people[i].id == this.props.id) {
        person = this.props.people[i];
        break;
      }
    }

    return (
      <div>
        <h2>Details</h2>
        <div>Id: {person.id}</div>
        <div>Name: {person.name}</div>
        <div>Description: {person.description}</div>
      </div>
    );
  }

}

module.exports = Detail;
