import React, { Component } from 'react';
import axios from 'axios';

import Rate from 'antd/lib/rate';
import Icon from 'antd/lib/icon';

class RateH extends Component {
  state = {
    value: 0,
  };
  handleChange = value => {
    try {
    } catch (err) {}
  };
  render() {
    const { value } = this.state;
    return <Rate allowHalf onChange={this.handleChange} value={value} />;
  }
}

export default RateH;
