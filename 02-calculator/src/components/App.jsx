import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import Display from './display/Display';
import Keypad from './keypad/Keypad';
import Operators from './operators/Operators';

class App extends Component {
  state = {
    currentCalString: '',
    result: null,
    currentCal: []
  };

  handleOperators = (op) => {
    let sign; 
    switch (op) {
      case 'divide':
        sign = '\u00F7';
        break;
      case 'multiply':
        sign = '\u00D7';
        break;
      case 'minus':
        sign = '\u2212';
        break;
      case 'plus':
        sign = '\u002B';
        break;
      case 'percent':
        sign = '\u0025';
        break;
      default:
        sign = '\u0025';
        break;
    }
    this.setState((prevState) => {
      return {
        currentCalString: prevState.currentCalString + ` ${sign} `,
      }
    })
  }

  handleKeypad = (key) => {
    if (typeof key !== 'string') {
      const last = this.state.currentCal[this.state.currentCal.length - 1];
      if (Number.isInteger(last)) {
        this.setState((prevState) => {
          return {
            currentCalString: prevState.currentCalString + key,
          }
        });
      } else {
        this.setState((prevState) => {
          return {
            currentCalString: prevState.currentCalString + key,
          }
        });
      }
    } else {
      console.log(key)
      if (key === '←') {
        let query = this.state.currentCalString;
        this.setState({ 
          currentCalString: query.slice(0, -1).trim(),
          result: null
        })
      }
      if (key === 'c') {
        this.setState({
          currentCalString: '',
          result: null,
          currentCal: []
        });
      }
      if (key === '\u00BD') {
        let num = this.state.currentCalString;
        this.setState({ result: Number(num) / 2 })
      }
      if (key === '%') {
        this.setState((prevState) => {
          return {
            currentCalString: prevState.currentCalString + ` ${key} `,
          }
        });
      }
    }
  }

  handleCalculation = () => {
    let query = this.state.currentCalString.split(' ');
    let total = 0, sign;
    query.map((ca, index) => {
      const item = Number(ca);
      if (index === 0 && item) {
        total = item;
      }
      if (isNaN(ca)) {
        if (ca === '−') {
          sign = 'minus';
        } else if (ca === '+') {
          sign = 'plus';
        } else if (ca === '×') {
          sign = 'multiply'
        } else if (ca === '÷') {
          sign = 'divide';
        } else {
          sign = '%'
        }
      }
      if (item && sign !== undefined) {
        if (sign === 'minus') {
          total = total - item;
        } else if (sign === 'plus') {
          total = total + item;
        } else if (sign === 'multiply') {
          total = total * item;
        } else if (sign === 'divide') {
          total = total / item;
        } else {
          total = total % item;
        }
      }
      return '';
    });
    
    this.setState({ result: total });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 offset-sm-4">
              <div className="row calculator">
                <Display operations={this.state.currentCalString} result={this.state.result} />
                <Keypad keys={this.handleKeypad} />
                <div className="col-sm4">
                  <Operators operator={this.handleOperators} calculate={this.handleCalculation} />
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    )
  }
}

export default App;