import React from 'react';
import bg from '../../assets/img/bg.jpg';
import './Banner.css';


const Banner = () => {
  return (
    <div className="bgImage">
      <img src={ bg } alt="background" />
    </div>
  )
}

export default Banner;