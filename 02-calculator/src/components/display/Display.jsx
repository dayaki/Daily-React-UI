import React from 'react';
import './Display.scss';

const Display = (props) => {
  return (
    <div className="col-sm-16 display">
        <p>{ props.operations.length ? props.operations : null } { props.result ? ' =' : null }</p>
        <h4>{ props.result ? props.result : null }</h4>
    </div>
  )
}

export default Display;