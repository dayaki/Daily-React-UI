import React from 'react';
import Sun from '../../assets/icons/sun.svg';

const Icon = (props) => {
  const style = {
    width: '35%',
    // float: 'right',
    // marginRight: '5px',
    marginBottom: '8px'
  }
  return (
    <img src={ Sun } alt="weather" style={style} />
  )
}

export default Icon;