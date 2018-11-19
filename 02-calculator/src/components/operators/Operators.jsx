import React from 'react';
import './Operators.scss';

const Operators = (props) => {
  return (
    <div className="col-3 operators">
      <button type="button" onClick={() => props.operator('divide')}>&divide;</button>
      <button onClick={() => props.operator('multiply')}>&times;</button>
      <button onClick={() => props.operator('minus')}>&#45;</button>
      <button onClick={() => props.operator('plus')}>&#43;</button>
      <button className="equal" onClick={props.calculate}>&#61;</button>
    </div>
  )
}

export default Operators;