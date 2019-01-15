import React from 'react';
import './CounterDisplay.css';

export default (props) => {
  return (
    <div className="Display">
      {props.valueToDisplay}
    </div>
  )
}
