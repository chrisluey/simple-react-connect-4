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

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board">

        <div className="board-column" onClick={function() { alert('column was clicked');}}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}

        </div>
        <div className="board-column" onClick={function() { alert('column was clicked');}}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}

        </div>
        <div className="board-column" onClick={function() { alert('column was clicked');}}>
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
          {this.renderSquare(16)}
          {this.renderSquare(17)}

        </div>
        <div className="board-column" onClick={function() { alert('column was clicked');}}>
          {this.renderSquare(18)}
          {this.renderSquare(19)}
          {this.renderSquare(20)}
          {this.renderSquare(21)}
          {this.renderSquare(22)}
          {this.renderSquare(23)}

        </div>
        <div className="board-column" onClick={function() { alert('column was clicked');}}>
          {this.renderSquare(24)}
          {this.renderSquare(25)}
          {this.renderSquare(26)}
          {this.renderSquare(27)}
          {this.renderSquare(28)}
          {this.renderSquare(29)}

        </div>
          <div className="board-column" onClick={function() { alert('column was clicked');}}>
          {this.renderSquare(30)}
          {this.renderSquare(31)}
          {this.renderSquare(32)}
          {this.renderSquare(33)}
          {this.renderSquare(34)}
          {this.renderSquare(35)}

        </div>

        <div className="board-column" onClick={function() { alert('column was clicked');}}>
          {this.renderSquare(36)}
          {this.renderSquare(37)}
          {this.renderSquare(38)}
          {this.renderSquare(39)}
          {this.renderSquare(40)}
          {this.renderSquare(41)}

        </div>

        </div>
      </div>
    );
  }
}

export default Board;
