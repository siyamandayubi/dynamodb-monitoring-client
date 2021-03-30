import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
class AuthenticatedComponent extends Component {
  render() {
    if (localStorage.getItem("token")) {
      return this.props.children;
    }
    else {
      return <Redirect to="/login" />
    }
  }
}

export default AuthenticatedComponent;
