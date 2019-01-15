import React from 'react';
import './CounterControl.css'

export default (props) => {
  return (
    <div className="Counter" onClick={props.clicked}>
      {props.label}
    </div>
  )
}
