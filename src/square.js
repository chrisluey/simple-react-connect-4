import React from 'react';
import './index.css';

// function react component for squares in the board
// each square has an id, so we can add/remove specific elements inside it
// each square has a circle inside it if a props.value is passed 
function Square(props) {

  var currSquare = document.getElementById(props.number);
  if (props.value === 'P1')
  {
    currSquare.classList.add("circle1");
  }
  else if (props.value === 'P2')
  {
    currSquare.classList.add("circle2");
  }
  else
  {
    // this is for the reset case to get rid of all circles
    if (currSquare != null)
    {
      currSquare.classList.remove('circle1');
      currSquare.classList.remove('circle2');
    }
  }

    return (
      <button className="square">
      <span id={props.number}></span>
      </button>
    );
}

export default Square;
