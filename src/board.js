import React from 'react';
import './index.css';
import Square from './square.js';

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.height = 6;
    this.width = 7;
    this.state = {
        squares: Array(this.height*this.width).fill(null),
        p1IsNext: true
    };
  }

  calculateWinner() {
    if(this.verticalWinner() || this.horizontalWinner()) {
      return 1;
    }
  }

  horizontalWinner() {
    let won = 1;
    let slot = 0;
    // Loop through all the slots
    while(slot < this.width * this.height) {
      // Loop through each column of the row
      for (let cur = slot; cur < slot + 3; cur++) {
        // Retrieve the color of the current slot
        let color = this.state.squares[cur];
        if(color !== null) {
          // Check winning condition
          if (this.state.squares[cur] === color && this.state.squares[cur + this.height] === color && this.state.squares[cur + this.height * 2] && this.state.squares[cur + this.height * 3]) {
            return won;
          }
        }
      }
      // Move to the next row
      slot += this.width;
    }
    return !won;
  }

  verticalWinner() {
    let won = 1;
    let slot = 0;
    // Loop through all the slots
    while(slot < this.width * this.height) {
      // Loop through each row of the column
      for (let cur = slot; cur < slot + 2; cur++) {
        // Retrieve the color of the current slot
        let color = this.state.squares[cur];
        if(color !== null) {
          // Check winning condition
          if (this.state.squares[cur] === color && this.state.squares[cur + 1] === color && this.state.squares[cur + 2] === color && this.state.squares[cur + 3] === color) {
            return won;
          }
        }
      }
      // Move to the next column
      slot += this.height;
    }
    return !won;
  }

  diagonalWinner() {
    let won = 1;
    let slot = 0;
    let col = 0;
    let row = 0;
    // Loop through all the slots
    while(slot < this.width * this.height) {
      // Loop through each row of the column
      for (let cur = slot; cur < slot + this.height; cur++) {
        row = cur;
        // Retrieve the color of the current slots
        let color = this.state.squares[cur];
        if(color !== null) {
          // Check winning conditions
          // Right descending
          if (this.rightDescending(color, row, col)) {
            return won;
          }
          if (this.leftDescending(color, row, col)) {
            return won;
          }
          if (this.rightAscending(color, row, col)) {
            return won;
          }
          if (this.leftAscending(color, row, col)) {
            return won;
          }

        }

      }

      // Move to the next column
      col++;
      slot += this.height;

    }
  }

  rightDescending(color, row, col) {
    // if(row + 3 < this.height && col + 3 < this.width) {
    //   console.log("Hey");
    //   if(this.state.squares[row] === color &&
    //     this.state.squares[row + 1 + this.height] === color &&
    //     this.state.squares[row + 2 + this.height*2] === color &&
    //     this.state.squares[row + 3 + this.height*3] === color) {
    //     console.log(row);
    //     console.log(row + 1 + this.height);
    //     console.log(row + 2 + this.height*2);
    //     console.log(row + 3 + this.height*3);
    //     return 1;
    //   }
    // }
    // return 0;
  }

  leftDescending(color, row, col) {
    // if(row + 3 >= 0 && col + 3 < this.width) {
    // }
    // return 0;
  }
  rightAscending(color, row, col) {
    // if(row + 3 < this.height && col + 3 < this.width) {
    // }
    // return 0;
  }
  leftAscending(color, row, col) {
    // if(row + 3 < this.height && col + 3 < this.width) {
    // }
    // return 0;
  }

  renderSquare(i) {
      return (
      <Square
        number={i}
        value={this.state.squares[i]}
      />
    );
  }

  findLowestSquare(i) {
    let x = i * this.height;
    let result = -1;
    for (let j = x; j < x + this.height; j++) {
      if (!this.state.squares[j]) {
        result = j;
        return result;
      }
    }
    return result;
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    let n = this.findLowestSquare(i);
    if (n !== -1) {
      squares[n] = this.state.p1IsNext ? 'P1' : 'P2';
      this.setState({
        squares: squares,
        p1IsNext: !this.state.p1IsNext,
      });
    }
    else
    {
      alert('Column is full');
    }
  }

  renderColumn(i) {
    let x = i * this.height;
    return (
      <div className="board-column" onClick={() => this.handleClick(i)}>
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
    let status = 'Next player: ' + (this.state.p1IsNext ? 'P1' : 'P2');

    if(this.calculateWinner()) {
      console.log(this.calculateWinner());
      status = 'Winner!';
    }

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
