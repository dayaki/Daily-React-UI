import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import '../assets/weather-icons/css/weather-icons.css';

import Background from './background/Background';
import Status from './status/Status';
import Date from './date/Date';
import Forecasts from './forecasts/Forecasts';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: {},
    };
  }

  componentDidMount() {
    this.getLocation();
  }

   getLocation() {
    const geolocation = navigator.geolocation;
    geolocation.getCurrentPosition(position => {
      this.getWeatherInfo(position.coords.latitude, position.coords.longitude)
      this.getCountry(position.coords.latitude, position.coords.longitude)
    });
  };

  async getCountry(lat, lon) {
    const data = await fetch(`https://www.mapquestapi.com/geocoding/v1/reverse?key=EJxIxXCHE2GUGynjPkm95dLBoipAd7sL&location=${lat},${lon}&includeNearestIntersection=true`).then(res => res.json());

    const location = {
      city: data.results[0].locations[0].adminArea5,
      state: data.results[0].locations[0].adminArea3,
      country: data.results[0].locations[0].adminArea1
    }

    this.setState({
      locationData: location
    });
  }

  async getWeatherInfo(lat, long) {
    const oneData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=c5baa00af2bfbc51b5a8bff68a069bb0`).then(res => res.json());

    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&units=metric&appid=c5baa00af2bfbc51b5a8bff68a069bb0&cnt=7`).then(res => res.json());

    const weatherInfo = {
      temp: oneData.main.temp,
      desc: oneData.weather[0].description,
      icon: `wi-owm-${oneData.weather[0].id}`
    };

    this.setState({
      weatherData: weatherInfo,
      forecastData: res.list
    })
  }

  render() {
    let time = moment().format('A').toLocaleLowerCase();
    return (
      <div className={time === 'am' ? 'day' : 'night'}>
        <Background day={time} />
        <div className="container">
          <div className="row">
            <div className="col-8">
              <Date />
            </div>
            <div className="col-4">
              { this.state.locationData ? 
                  <Status weatherData={this.state.weatherData} location={this.state.locationData} />
                : <ReactLoading className="loader" type="bubbles" color="#fff" height={70} width={70} />
              }
            </div>
          </div>
        </div>
        <div className="forecastsWrapper">
          <div className="col-12">
            { this.state.forecastData ? <Forecasts forecasts={this.state.forecastData} /> : <ReactLoading className="loader" type="bubbles" color="#fff" height={70} width={70} /> }
          </div>
        </div>
      </div>
    )
  }
}

export default App;