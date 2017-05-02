import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import Query from './Query.js';
import RecipeList from './RecipeList.js';
import Filter from './Filter.js';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      recipes: [
        {
          url: 'http://img.recipepuppy.com/40627.jpg',
          name: 'Aussie Pepper Steak / Steak With Creamy Pepper Sauce - Changed',
          ingredients: 'beef broth, butter, cream, flour, vegetable oil, salt, sirloin steak, steak sauce'
        },
        {
          url: 'no-image-available.png',
          name: 'Curried Steak With Orange Sauce &amp; Orange Ginger Steak Skewer - Changed',
          ingredients: 'orange zest, ginger, london broil, salt, white pepper'
        },
        {
          url: 'no-image-available.png',
          name: 'new thing',
          ingredients: 'happiness'
        }
      ],
      filters: ['potatoes', 'ketchup', 'molasses']
    }
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
