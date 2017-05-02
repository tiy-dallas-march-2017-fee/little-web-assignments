import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import Query from './Query.js';
import RecipeList from './RecipeList.js';
import Filter from './Filter.js';
import $ from 'jquery';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      recipes: [],
      filters: ['potatoes', 'ketchup', 'molasses']
    }
  }

  makeAjaxCall() {
    $.ajax({
      url: '/api/?i=onions,ketchup&q=steak'
    })
    .done((data) => {
      //There data comes back as text. Lame. Turning that to objects.
      data = JSON.parse(data);

      let fixedData = data.results.map((x) => {

        //check for thumbnail and if not...panic? Or make it work!

        return {
          name: x.title,
          url: x.thumbnail,
          ingredients: x.ingredients
        };
      })

      console.log('new fancy data?', fixedData);
      this.setState({
        recipes: fixedData
      });

    });
  }

  componentDidMount() {
    console.log('ajax here');

    this.makeAjaxCall();
  }

  render() {
    return (
      <div>
        <header>
          <h1 className="container">My Recipe App</h1>
        </header>
        <div className="contents container">
          <Query />
          <RecipeList recipes={this.state.recipes} />
          <Filter filters={this.state.filters} />
          <footer>This app is built with <a href="http://recipepuppy.com"><img src="recipepuppy.png" alt="recipe puppy" /></a>.</footer>
        </div>
      </div>
    );
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
