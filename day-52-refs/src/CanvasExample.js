import React from 'react';

class CanvasExample extends React.Component {

  componentDidMount() {

    const ctx = this.canvas.getContext('2d');
    let xLocation = 100;
    let direction = 1;

    const frameFunc = () => {
      if (this.canvas === null) {
        return;
      }

      if (xLocation + 2 > this.canvas.width) {
        direction = -1;
      }
      else if (xLocation - 2 < 0) {
        direction = 1;
      }

      xLocation += 5 * direction;

      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      ctx.fillRect(xLocation, 0, 5, 5);

      window.requestAnimationFrame(frameFunc);
    };

    // Using requestAnimationFrame for the animation.
    // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
    window.requestAnimationFrame(frameFunc)
  }

  render() {
    return (
      <div>
        <h1>Canvas Example</h1>

        <canvas ref={(c) => this.canvas = c} width="500" height="100"></canvas>
      </div>
    );
  }

}

export default CanvasExample;
