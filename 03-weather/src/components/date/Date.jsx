import React from 'react';
import moment from 'moment';
import './Date.scss';

class Date extends React.Component {
  constructor() {
    super();
    this.state = {
      currentDate: moment().format('dddd, DD MMMM YYYY'),
      currentTime: moment().format('hh:mm'),
      pmOrAm: moment().format('A'),
    };
  };
  

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      5000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      currentDate: moment().format('dddd, DD MMMM YYYY'),
      currentTime: moment({}).format('hh:mm'),
      pmOrAm: moment({}).format('A'),
    });
  }

  render() {
    const { currentTime, pmOrAm, currentDate } = this.state;
    return (
      <div className="today">
        <h3>{ currentTime } <span>{ pmOrAm }</span></h3>
        <h1>{ currentDate }</h1>
      </div>
    );
  }
}

export default Date;