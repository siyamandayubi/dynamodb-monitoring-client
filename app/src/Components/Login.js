import React, { Component } from 'react';
import AuthenticationService from '../Services/AuthenticateService.js';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { accessKey: "", secret: "", success: false };
    this.onSubmit = this.onSubmit.bind(this);
    this.changeEvent = this.changeEvent.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    AuthenticationService.login(this.state.accessKey, this.state.secret).then((res) => {
      if(res.token){
        this.setState({...this.state, success: true});
      }
    });
  }

  changeEvent(event, name) {
    var newState = { ...this.state };
    console.log(name);
    console.log(event?.target?.value);
    newState[name] = event.target.value;
    this.setState(newState);
  }

  render() {
    if (this.state.success) {
      return <Redirect to="/"></Redirect>
    }

    return (
      <div className="card">
        <div className="card-header">Login</div>
        <div className="card-body">
          <form onSubmit={(event) => this.onSubmit(event)}>
            <label>Access Key:</label>
            <input type="text" value={this.state.accessKey} onChange={(event) => this.changeEvent(event, "accessKey")}></input>
            <label>secret:</label>
            <input type="password" value={this.state.secret} onChange={(event) => this.changeEvent(event, "secret")}></input>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="card-footer"></div>
      </div>
    );
  }
}

export default Login;
