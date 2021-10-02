//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Internals
import './index.css';

class Login extends Component {
  static propTypes = {
    addItemToCart: PropTypes.func.isRequired,
  };

  render() {
    return(
      <div>
        <h1>este es el Login</h1>
      </div>
    );
  }
}

export default Login;
