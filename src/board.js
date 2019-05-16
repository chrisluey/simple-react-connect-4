import React from "react";
import "./index.css";
import Square from "./square.js";
import { restElement } from "@babel/types";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(42).fill(null),
      p1IsNext: true
    };
  }

  renderSquare(i) {
    return <Square number={i} value={this.state.squares[i]} />;
  }
  findLowestSquare(i) {
    const squares = this.state.squares.slice();
    let x = i * 6;
    let result = -1;
    for (let j = x; j < x + 6; j++) {
      if (!squares[j]) {
        result = j;
        return result;
      }
    }
    return result;
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    let n = this.findLowestSquare(i);
    if (n != -1) {
      squares[n] = this.state.p1IsNext ? "P1" : "P2";
    } else {
      alert("Column is full");
    }
    this.setState({
      squares: squares,
      p1IsNext: !this.state.p1IsNext
    });
  }

  renderColumn(i) {
    let x = i * 6;
    return (
      <div className="board-column" onClick={() => this.handleClick(i)}>
        {this.renderSquare(x)}
        {this.renderSquare(x + 1)}
        {this.renderSquare(x + 2)}
        {this.renderSquare(x + 3)}
        {this.renderSquare(x + 4)}
        {this.renderSquare(x + 5)}
      </div>
    );
  }

  render() {
    let status =
      "Next player: " + (this.state.p1IsNext ? "HachimanHikigaya" : "Langara");

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
        <button className="resetbutton" onClick={() => this.resetButton()}>
          {" "}
          Reset{" "}
        </button>
      </div>
    );
  }
  resetButton = () => {
    this.state = {
      squares: Array(42).fill(null),
      p1IsNext: true
    };
    this.render();
  };
}

export default Board;
