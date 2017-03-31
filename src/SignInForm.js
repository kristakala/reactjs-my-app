// @flow
import React, { Component } from 'react';
import './SignInForm.css';

class SignInForm extends Component {
  render() {
    return (
      <div className="Sign-in-form">
        <label>User Name</label>
        <input type="text" className="Sign-in-username" />
        <label>Password</label>
        <input type="text" className="Sign-in-password" />
        <button>Sign In</button>
      </div>
    );
  }
}

export default SignInForm;