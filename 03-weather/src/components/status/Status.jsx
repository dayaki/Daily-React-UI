import React from 'react';
import './Status.scss';

const Status = (props) => {
  return (
    <div className="col weatherStatus">
      <i className={ 'weather-icon wi ' + props.weatherData.icon }></i>
      <h2>{ props.weatherData.desc }</h2>
      <p>{ props.location.city + ', ' + props.location.state }</p>
      <h3>{ parseInt(props.weatherData.temp) } <sup>o</sup></h3>
    </div>
  )
}

export default Status;