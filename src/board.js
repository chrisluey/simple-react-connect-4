import React from 'react';
import './index.css';
import Square from './square.js';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        squares: Array(42).fill(null),
        xIsNext: true
    };
  }

  renderSquare(i) {
    return <Square number={i}/>;
  }

  renderColumn(i) {
    var x = i *6;
    return (
      <div className="board-column" onClick={function() { alert('column was clicked');}}>
            {this.renderSquare(x)}
            {this.renderSquare(x + 1)}
            {this.renderSquare(x + 2)}
            {this.renderSquare(x + 3)}
            {this.renderSquare(x + 4)}
            {this.renderSquare(x + 5)}
  
          </div>
    )
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board">

        {this.renderColumn(0)}
        {this.renderColumn(1)}
        {this.renderColumn(2)}
        {this.renderColumn(3)}
        {this.renderColumn(4)}
        {this.renderColumn(5)}
        {this.renderColumn(6)}

        </div>
      </div>
    );
  }
}

export default Board;
