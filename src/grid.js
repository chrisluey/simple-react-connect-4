import React from 'react';
import './index.css';
import Circle from './circle.js';

class Grid extends React.Component {
  renderCircle(i) {
    return <Circle />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="grid-row">
          {this.renderCircle(0)}
          {this.renderCircle(1)}
          {this.renderCircle(2)}
        </div>
        <div className="grid-row">
          {this.renderCircle(3)}
          {this.renderCircle(4)}
          {this.renderCircle(5)}
        </div>
        <div className="grid-row">
          {this.renderCircle(6)}
          {this.renderCircle(7)}
          {this.renderCircle(8)}
        </div>
      </div>
    );
  }
}

export default Grid;