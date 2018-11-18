import React from 'react'
import './Login.css';

const focused = () => {
  console.log('focused')
}

const Login = (props) => {
  return (
    <form className="login" onSubmit={props.formSubmit}>
      <div className="form-row">
        <div className="col-sm-12 input active">
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            className={'form-control ' + (props.emailStatus ? 'valid' : 'invalid')} 
            autoComplete="off" 
            id="email" 
            placeholder="Enter email" 
            onChange={props.emailChanged}>
          </input>
          {/* { props.formStatus.email ? null : <small className="form-text">This is a required field.</small> } */}
        </div>
        <div className="col-sm-12 input">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            className={'form-control ' + (props.passwordStatus ? 'valid' : 'invalid')} 
            id="password" placeholder="********" 
            onChange={props.passwordChanged}>
          </input>
          {/* { props.formStatus.password ? null : <small className="form-text">Your password needs to be longer than 5 characters.</small> } */}
        </div>
      </div>

      <div className="form-row">
        <div className="col-sm-6 input form-check-inline">
          <input type="checkbox" className="form-check-input" id="rememberme"></input>
          <label className="form-check-label" htmlFor="rememberme">Rememer me</label>
        </div>
        <div className="col-sm-5 input">
          <a href="#" className="link">Forgot password</a>
        </div>
      </div>

      <div className="form-row">
        <div className="col-sm-6 input">
          <button className="loginBtn">Login</button>
        </div>
        <div className="col-sm-6 input">
          <button className="signupBtn">Sign Up</button>
        </div>
      </div>
    </form>
  )
}

export default Login;