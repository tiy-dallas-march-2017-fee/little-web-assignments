import React from 'react';

import Item from './Item.js';

class Gallery extends React.Component {
  render() {
    return (
      <div>
        <h2>Gallery</h2>

        <p>This is the gallery. Here I can see components in different visual states.</p>

        <ol>
          <Item text="This is incomplete" id="1" isComplete={false} />
          <Item text="This is complete" id="2" isComplete={true} />
          <Item text="This one has rediculously long text so as to cause wrapping, and I do not mean rapping because that is now how I roll." id="1" isComplete={false} />
          <Item text="This one is complete and has rediculously long text so as to cause wrapping, and I do not mean rapping because that is now how I roll." id="1" isComplete={true} />
        </ol>
      </div>
    );
  }
}

module.exports = Gallery;
