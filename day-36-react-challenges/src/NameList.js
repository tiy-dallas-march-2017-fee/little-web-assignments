import React from 'react';

class NameList extends React.Component {

  constructor() {
    super();

    this.state = {
      people: [],
      firstName: '',
      lastName: '',
      middleInitial: ''
    }
  }

  // firstNameChange(evt) {
  //   this.setState({
  //     firstName: evt.target.value
  //   });
  // }
  //
  // lastNameChange(evt) {
  //   this.setState({
  //     lastName: evt.target.value
  //   });
  // }

  handleInputChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  add() {
    var copyOfPeople = this.state.people.slice();
    copyOfPeople.push(this.state.firstName + ' ' + this.state.middleInitial + ' ' + this.state.lastName);

    this.setState({
      people: copyOfPeople,
      firstName: '',
      lastName: ''
    });
  }

  clear() {
    this.setState({
      firstName: '',
      lastName: '',
      middleInitial: ''
    })
  }

  render() {
    console.log('render', this.state);

    var people = this.state.people.map((x, i) => {
      return <li key={i + x}>{x}</li>
    });

    return (
      <div>
        <input placeholder="First name" onChange={(evt) => this.handleInputChange(evt)} value={this.state.firstName} name="firstName" />
        <input placeholder="MI" onChange={(evt) => this.handleInputChange(evt)} value={this.state.middleInitial} name="middleInitial" />
        <input placeholder="Last name" onChange={(evt) => this.handleInputChange(evt)} value={this.state.lastName} name="lastName" />
        <button onClick={() => this.add()}>add</button>
        <button onClick={() => this.clear()}>Clear me baby one more time</button>

        <ol>
          {people}
        </ol>
      </div>
    )
  }

}

module.exports = NameList;
