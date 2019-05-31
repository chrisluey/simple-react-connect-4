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
        p1IsNext: true,
        gameWon: false
    };
  }

  // this function looks at the board's values and determines if a player has won
  calculateWinner() {
    let won = 1;
    if(this.horizontalWinner() || this.verticalWinner() || this.diagonalWinner()) {
      this.setState({
        gameWon: true
      });
      return won;
    }
    return !won;
  }

  // Checks for 4 consecutive same-colored discs in a row
  horizontalWinner() {
    let won = 1;
    for(let row = 0; row < this.height; row++) {
      for(let col = 0; col < this.width - 3; col++) {
        let disc = this.state.squares[col][row];
        if(disc !== null) {
          if(this.state.squares[col + 1][row] === disc
            && this.state.squares[col + 2][row] === disc
            && this.state.squares[col + 3][row] === disc) {
            return won;
          }
        }
      }
    }
    return !won;
  }

  // Checks for 4 consecutive same-colored discs in a column
  verticalWinner() {
    let won = 1;
    for(let row = 0; row < this.height - 3; row++) {
      for(let col = 0; col < this.width; col++) {
        let disc = this.state.squares[col][row];
        if(disc !== null) {
          if(this.state.squares[col][row + 1] === disc
            && this.state.squares[col][row + 2] === disc
            && this.state.squares[col][row + 3] === disc) {
            return won;
          }
        }
      }
    }
    return !won;
  }

  // Checks for 4 consecutive same-colored discs in a diagonal
  diagonalWinner() {
    let won = 1;
    if(this.ascendingDiagonalWinner() || this.descendingDiagonalWinner()) {
      return won;
    }
    return !won;
  }

  ascendingDiagonalWinner() {
    let won = 1;
    for(let row = 0; row < this.height - 3; row++) {
      for(let col = 0; col < this.width - 3; col++) {
        let disc = this.state.squares[col][row];
        if(disc !== null) {
          if(this.state.squares[col + 1][row + 1] === disc
            && this.state.squares[col + 2][row + 2] === disc
            && this.state.squares[col + 3][row + 3] === disc) {
            return won;
          }
        }
      }
    }
    return !won;
  }

  descendingDiagonalWinner() {
    let won = 1;
    for(let row = this.height - 1; row > 2; row--) {
      for(let col = 0; col < this.width - 3; col++) {
        let disc = this.state.squares[col][row];
        if(disc !== null) {
          if(this.state.squares[col + 1][row - 1] === disc
            && this.state.squares[col + 2][row - 2] === disc
            && this.state.squares[col + 3][row - 3] === disc) {
            return won;
          }
        }
      }
    }
    return !won;
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
    if(!this.state.gameWon) {
      const squares = this.state.squares.slice();
      let n = this.findLowestSquare(col);
      if (n !== -1) {
        squares[col][n] = this.state.p1IsNext ? 'P1' : 'P2';
        if(!this.calculateWinner()) {
          this.setState({
            squares: squares,
            p1IsNext: !this.state.p1IsNext,
          });
        }
      }
      else
      {
        alert('Column is full');
      }
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
    let status;
    if(this.state.gameWon) {
      status = (this.state.p1IsNext ? 'P1' : 'P2') + ' is the winner!';
    } else {
      status = 'Next player: ' + (this.state.p1IsNext ? 'P1' : 'P2');

    }
    let statusClass = this.state.p1IsNext ? "status1" : "status2";

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
      p1IsNext: true,
      gameWon: false
    });
  };
}

export default Board;
