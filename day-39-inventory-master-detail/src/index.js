import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Master from './Master.js';
import Detail from './Detail.js';

const Home = () => <div>Home</div>

class InventoryApp extends React.Component {

  constructor() {
    super();

    this.state = {
      inventory: [
        {
          id: 678,
          name: 'children',
          amount: 3,
          description: 'Generally cute but loud.'
        },
        {
          id: 5234,
          name: 'spouse',
          amount: 1,
          description: 'Constantly awesome'
        },
        {
          id: 6745,
          name: 'books',
          amount: 600,
          description: 'A man\'s best friend.'
        },
        {
          id: 9764,
          name: 'fish',
          amount: 6,
          description: 'The amount is generally variable as they die frequently.'
        },
        {
          id: 2,
          name: 'spoons',
          amount: 25,
          description: 'Useful for soup.'
        }
      ]
    }
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ol>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/list">List</Link></li>
            </ol>
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/list" render={() => <Master inventory={this.state.inventory} />} />
          <Route
            path="/viewdetail/:inventoryId"
            render={(props) => <Detail
                                  inventory={this.state.inventory}
                                  inventoryId={props.match.params.inventoryId} />
                   }
          />
        </div>
      </Router>
    );
  }

}


ReactDOM.render(
  <InventoryApp />,
  document.getElementById('root')
);
