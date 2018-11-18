import React from 'react';
import './Social.css';

const Social = (props) => {
  const style = {
    facebook: {
      backgroundColor: '#425f9e',
      height: '40px',
      width: '180px',
      fontSize: '14px',
      borderRadius: '5px',
      fontFamily: 'Fira Sans, sans-serif',
      color: '#fff',
      marginRight: '20px',
    },
    xing: {
      backgroundColor: '#005352',
      height: '40px',
      width: '180px',
      fontSize: '14px',
      borderRadius: '5px',
      fontFamily: 'Fira Sans, sans-serif',
      color: '#fff',
    }
  }
  let buttonType = null;
  if (props.type === 'facebook') {
    buttonType = 'facebook';
  } else {
    buttonType = 'xing';
  }
  return (
    <button className="btn btn-social btn-lg" style={buttonType === 'facebook' ? style.facebook : style.xing}>
      { props.children }
    </button>
  )
}

export default Social;