import React from 'react';

class TodoApp extends React.Component {

  constructor() {
    super();

    this.state = {
      items: [
        { id: 5, text: 'Go to Rusty Taco', isComplete: false },
        { id: 7, text: 'Meet with Josh', isComplete: false },
        { id: 15, text: 'Review deployment', isComplete: false }
      ]
    };
  }

  handleItemClick(item) {

    //copy the state
    var arr = this.state.items.slice();

    //find the one to change and flip the isComplete value
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].id === item.id) {
        //the right one!
        arr[i].isComplete = !arr[i].isComplete;
      }
    }

    //call set state to re-render
    this.setState({
      items: arr
    });
  }

  render() {

    const items = this.state.items.map((x) => {

      const className = x.isComplete ? 'done': '';

      return <li
                onClick={() => this.handleItemClick(x)}
                className={className}
                key={x.id}>{x.text}</li>
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

module.exports = TodoApp;
