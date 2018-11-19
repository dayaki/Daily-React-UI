import React from 'react';
import './Keypad.scss';

const Keypad = (props) => {
  const keys = ['c', "\u00BD", "\u0025" ,7, 8, 9, 4, 5, 6, 1, 2, 3, 0 ,'\u2190', ','];
  return (
    <div className="col-sm-8 keypad">
      { keys.map((key, index) => <button type="button" key={index} onClick={() => props.keys(key)}>{ key }</button>) }
    </div>
  )
}

export default Keypad;