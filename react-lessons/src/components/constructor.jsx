// ./components/Constructor.js

import React, { Component } from 'react';

class Constructor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      car: props.name,
    };
  }

  render() {
    return (
      <div>
        <h1>{`This car is a ${this.state.car}`}</h1>
      </div>
    );
  }
}

export default Constructor;
