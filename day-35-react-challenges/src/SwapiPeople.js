import React from 'react';
//first, you run `npm install jquery --save`
import $ from 'jquery';

class Person extends React.Component {
  render() {
    return (
      <li>
        <div>Name: {this.props.name}</div>
        <div>Birth Year: {this.props.birthYear}</div>
      </li>
    )
  }
}


class SwapiPeople extends React.Component {

  constructor() {
    super();

    this.state = {
      people: []
    };
  }

  componentDidMount() {

    $.ajax({
      url: 'http://swapi.co/api/people'
    })
    .done((data) => {
      
      this.setState({
        people: data.results
      })
    });

  }

  render() {
    let people = this.state.people.map((x) => <Person key={x.url} name={x.name} birthYear={x.birth_year} />);

    // More verbose map
    // let people = this.state.people.map((x) => {
    //   return <Person name={x.name} birthYear={x.birth_year} />
    // });

    return (
      <div>
        <ol>
          {people}
        </ol>
      </div>
    );
  }
}

module.exports = SwapiPeople;
