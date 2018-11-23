import React from 'react';
import './Forecast.scss';

const Forecast = (props) => {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var d = new Date(Date.now());
  var dayName = days[d.getDay()];

  return (
    <div className={'forecast ' + (props.active ? 'active' : null)}>
      <h3>{ props.day === dayName ? 'Today' : props.day }</h3>
      <i className={ 'weather-icon wi wi-owm-' + props.data.weather[0].id }></i>
      <p>{ parseInt(props.data.temp.max) }</p>
    </div>
  )
}

export default Forecast;