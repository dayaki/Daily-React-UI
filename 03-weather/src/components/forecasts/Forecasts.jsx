import React from 'react';
import './Forecasts.scss';
import Forecast from '../forecast/Forecast';

const getWeekDays = (index) => {
  var baseDate = new Date(Date.now());
  var weekDays = [];
  for(let i = 0; i < 7; i++) {       
    weekDays.push(baseDate.toLocaleDateString('en-us', { weekday: 'long' }));
    baseDate.setDate(baseDate.getDate() + 1);       
  }
  return weekDays[index];
}

const renderData = (props) => {
  let data = null;
  const forecastData = props.forecasts;
  if (forecastData !== undefined) {
    return data = (
      forecastData.map((forecast, index) => (
        <Forecast key={forecast.dt} day={getWeekDays(index)} data={forecast} active={index === 0 ? 'active' : null } />
      ))
    )
  }
  return data;
}

const Forecasts = (props) => {
  return (
    <div className="forecastWrapper">
    { renderData(props) }
    </div>
  )
}

export default Forecasts;