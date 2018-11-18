import React, { Component } from 'react';
import Social from '../social/Social';
import Login from '../login/Login';
import Banner from '../banner/Banner';

import Styles from "./Landing.css";
import logo from '../../assets/img/logo.jpg';
import facebook from '../../assets/svg/facebook.svg';
import xing from '../../assets/svg/xing.svg';

class Landing extends Component {
  state = {
    email: '',
    password: '',
    emailStatus: false,
    passwordStatus: false,
  }

  handleEmailChange = (e) => {
    const email = e.target.value;
    if (email.includes('@') && email.includes('.')) {
      this.setState({
        email,
        emailStatus: true,
      });
    } else {
      this.setState({
        emailStatus: false,
      });
    }
  }

  handlePasswordChange = (e) => {
    const password = e.target.value;
    if (password !== ''  && password.length > 5) {
      this.setState({
        password,
        passwordStatus: true
      });
    } else {
      this.setState({
        passwordStatus: false
      });
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="landing">
        <div className="row no-gutters">
          <div className="col-sm-6">
            <div className="leftItem">
              <img src={logo} alt="logo" className="logo" />
              <p>Welcome Back, please login <br/> to your account.</p>
              <Social type="facebook"><img src={facebook} alt="login with Facebook" /> Login with facebook</Social>
              <Social type="xing"><img src={xing} alt="login with Xing" /> Login with Xing</Social>
              <p className="or">- OR -</p>
              <Login 
                formSubmit={this.handleFormSubmit}
                emailStatus={this.state.emailStatus} 
                passwordStatus={this.state.passwordStatus}
                emailChanged={this.handleEmailChange} 
                passwordChanged={this.handlePasswordChange} />
              <div className="footnote">
                <p>By signing up, you agree to Housy's <br/> <a href="">Terms and Conditions</a> and <a href="">Privacy Policy</a></p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 bg">
            <Banner />
          </div>
        </div>
      </div>
    )
  }
}

export default Landing;