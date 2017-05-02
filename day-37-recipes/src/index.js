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
      recipes: [], // I no longer need dummy data, because I am making the API call
      filters: ['potatoes', 'ketchup', 'molasses']
    }
  }

  makeAjaxCall() {
    $.ajax({
      // This is proxying through create-react-app to avoid CORS
      // Note the `package.json` had to change
      url: '/api/?i=onions,ketchup&q=steak'
    })
    .done((data) => {
      //There data comes back as text. Lame. Turning that to objects.
      data = JSON.parse(data);

      let mappedArray = data.results.map((x) => {
        // Check for thumbnail and if not...panic? Or make it work!

        // Here, I am mapping their names to my names.
        return {
          name: x.title,
          url: x.thumbnail,
          ingredients: x.ingredients
        };
      })

      // This will cause the re-render!
      this.setState({
        recipes: mappedArray
      });

      /*
      // For Nikki
      this.setState({
        data: {
          result: mappedArray
        }
      })
      */

    });
  }

  componentDidMount() {
    // Make the API call. Broke that out into a separate function, because you will
    //  have to make this call whenever queries or filters change.
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
