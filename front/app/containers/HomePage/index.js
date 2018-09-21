/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Button from 'antd/lib/button';

import Graph from './Graph';

/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.PureComponent {
  state = {
    spec: {
      $schema: 'https://vega.github.io/schema/vega-lite/v3.0.json',
      description: 'A simple bar chart with embedded data.',
      data: {
        values: [
          { a: 'A', b: 28 },
          { a: 'B', b: 55 },
          { a: 'C', b: 43 },
          { a: 'D', b: 91 },
          { a: 'E', b: 81 },
          { a: 'F', b: 53 },
          { a: 'G', b: 19 },
          { a: 'H', b: 87 },
          { a: 'I', b: 52 },
        ],
      },
      mark: 'bar',
      encoding: {
        x: { field: 'a', type: 'ordinal' },
        y: { field: 'b', type: 'quantitative' },
      },
    },
    config: {
      // default view background color
      // covers the entire view component
      background: '#ffffff',
      axis: {
        labelFont: 'serif',
        labelFontSize: 16,
        tickWidth: 3,
        tickColor: 'red',
      },
    },
  };

  changeData = () => {
    this.setState({
      spec: {
        data: {
          values: [
            { a: 'C', b: 2 },
            { a: 'C', b: 7 },
            { a: 'C', b: 4 },
            { a: 'D', b: 1 },
            { a: 'D', b: 2 },
            { a: 'D', b: 6 },
            { a: 'E', b: 8 },
            { a: 'E', b: 4 },
            { a: 'E', b: 7 },
          ],
        },
        mark: 'point',
        encoding: {
          x: { field: 'a', type: 'nominal' },
          y: { aggregate: 'average', field: 'b', type: 'quantitative' },
        },
      },
    });
  };

  render() {
    const { spec } = this.state;
    return (
      <div>
        <Graph spec={spec} />
        <Button type="primary" onClick={this.changeData}>
          Change data
        </Button>
      </div>
    );
  }
}

export default HomePage;
