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
          {this.renderCircle(3)}
          {this.renderCircle(4)}
          {this.renderCircle(5)}
          {this.renderCircle(6)}
       
        </div>
        <div className="grid-row">
          {this.renderCircle(7)}
          {this.renderCircle(8)}
          {this.renderCircle(9)}
          {this.renderCircle(10)}
          {this.renderCircle(11)}
          {this.renderCircle(12)}
          {this.renderCircle(13)}
    
        </div>
        <div className="grid-row">
          {this.renderCircle(14)}
          {this.renderCircle(15)}
          {this.renderCircle(16)}
          {this.renderCircle(17)}
          {this.renderCircle(18)}
          {this.renderCircle(19)}
          {this.renderCircle(20)}
   
        </div>
        <div className="grid-row">
          {this.renderCircle(21)}
          {this.renderCircle(22)}
          {this.renderCircle(23)}
          {this.renderCircle(24)}
          {this.renderCircle(25)}
          {this.renderCircle(26)}
          {this.renderCircle(27)}
  
        </div>
        <div className="grid-row">
          {this.renderCircle(28)}
          {this.renderCircle(29)}
          {this.renderCircle(30)}
          {this.renderCircle(31)}
          {this.renderCircle(32)}
          {this.renderCircle(33)}
          {this.renderCircle(34)}
     
        </div>
          <div className="grid-row">
          {this.renderCircle(35)}
          {this.renderCircle(36)}
          {this.renderCircle(37)}
          {this.renderCircle(38)}
          {this.renderCircle(39)}
          {this.renderCircle(40)}
          {this.renderCircle(41)}
         
        </div>
      </div>
    );
  }
}
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(42).fill(null)
      }],
      xIsNext: true
    };
  }
export default Grid;
