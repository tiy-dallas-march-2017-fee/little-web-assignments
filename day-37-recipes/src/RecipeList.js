import React, { Component } from 'react';
import './recipe-list.css';

class RecipeList extends Component {

  render() {
    return (
      <div className="recipe-list">
        <ol>
          <li>
            <img src="http://img.recipepuppy.com/40627.jpg" alt="The Alt Title" />
            <div className="details">
              <h2>Aussie Pepper Steak / Steak With Creamy Pepper Sauce</h2>
              <div className="ingredients">
                Ingredients: beef broth, butter, cream, flour, vegetable oil, salt, sirloin steak, steak sauce
              </div>
            </div>
          </li>

          <li>
            <img src="no-image-available.png" alt="The Alt Title" />
              <div className="details">
                <h2>Curried Steak With Orange Sauce &amp; Orange Ginger Steak Skewer</h2>
                <div className="ingredients">Ingredients: orange zest, ginger, london broil, salt, white pepper</div>
              </div>
          </li>

        </ol>
      </div>
    );
  }

}

module.exports = RecipeList;
