import React from 'react';
import './index.css';
import Square from './square.js';

class Board extends React.Component {

  // constructor for the board component
  // takes props from the game component
  // no props needed so far
  // initializes a 6 x 7 2-dimensional array of nulls to represent the board's values
  constructor(props) {
    super(props);
    this.height = 6;
    this.width = 7;
    var squaresArray = Array(this.width);
    for(var i = 0; i < this.width; i++) {
      squaresArray[i] = Array(this.height).fill(null);
    }
    this.state = {
        squares: squaresArray,
        p1IsNext: true
    };
  }

  // this function looks at the board's values and determines if a player has won
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

  // int: col, column number in the board 
  // int: row, row number in the board
  // renders a square in the board, used as a helper function in renderColumn
  renderSquare(col, row) {
      return (
      <Square
        number={col * 6 + row} //if u want to look at what the board squares arrangement looks like,
                               // replace props.value with props.number in square.js
        value={this.state.squares[col][row]}
      />
    );
  }

  // int: col, column number for the board
  // finds the lowest unoccupied square in a given column
  findLowestSquare(col) {
    let result = -1;
    for (let j = 0; j < this.height; j++) {
      if (!this.state.squares[col][j]) {
        result = j;
        return result;
      }
    }
    return result;
  }

  // int: col, the column number in the board
  // onclick function for each column in the board,
  // places a circle with a value depending on the next player,
  // will stop if winner is declared or the column is full
  handleClick(col) {
    const squares = this.state.squares.slice();
    let n = this.findLowestSquare(col);
    if (n !== -1) {
      squares[col][n] = this.state.p1IsNext ? 'P1' : 'P2';
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

  // int: col, the column number in the board
  // renders a column in the board, called 7 times in the render function of the board
  renderColumn(col) {
    return (
      <div className="board-column" onClick={() => this.handleClick(col)}>
            {this.renderSquare(col, 0)}
            {this.renderSquare(col, 1)}
            {this.renderSquare(col, 2)}
            {this.renderSquare(col, 3)}
            {this.renderSquare(col, 4)}
            {this.renderSquare(col, 5)}
      </div>
    )
  }

  // this function renders the board along with the buttons and information needed for the game
  render() {
    let status = 'Next player: ' + (this.state.p1IsNext ? 'P1' : 'P2');
    let statusClass = this.state.p1IsNext ? "status1" : "status2";

    // if(this.calculateWinner()) {
    //   console.log(this.calculateWinner());
    //   status = 'Winner!';
    // }

    return (
      <div>
        <div className={statusClass}>{status}</div>
        <div className="board">

        {this.renderColumn(0)}
        {this.renderColumn(1)}
        {this.renderColumn(2)}
        {this.renderColumn(3)}
        {this.renderColumn(4)}
        {this.renderColumn(5)}
        {this.renderColumn(6)}

        </div>
        <button className="resetbutton" onClick={() => this.resetButton()}>
          {" "}
          Reset{" "}
        </button>
      </div>
    );
  }
  resetButton = () => {
    var squaresArray = Array(this.width);
    for(var i = 0; i < this.width; i++) {
      squaresArray[i] = Array(this.height).fill(null);
    }
    this.setState({
      squares: squaresArray,
      p1IsNext: true
    });
  };
}

export default Board;
