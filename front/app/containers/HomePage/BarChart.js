import React, { Component } from 'react';
import vegaEmbed from 'vega-embed';
import Button from 'antd/lib/button';

class BarChart extends React.Component {
    const divTarget = 'try';
  state = {
    spec: {},
    config: {},
  };

  componentWillMount() {
    // do the fetch here of the data and order it
    this.setState({
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
    });
    this.setState({
      spec: {
        $schema: 'https://vega.github.io/schema/vega-lite/v3.json',
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
          tooltip: { field: 'b', type: 'quantitative' },
        },
      },
    });
  }

  componentDidMount() {
    vegaEmbed(this.divTarget, this.state.spec, {
      config: this.state.config,
      tooltip: { theme: 'dark' },
      defaultStyle: true,
    })
      .then(function(result) {
        console.log(result);
      })
      .catch(console.error);
  }

  render() {
    return (
      <div>
        <div ref={div => (this.divTarget = div)}> </div>
        <textarea cols="30" rows="20" ref={div => (this.divTarget = div)} />
        <Button
          onClick={() => {
            let obj = { x: 'Holi', y: { field: 'Tefa', type: 'quantitative' } };
            this.divTarget.textContent = JSON.stringify(obj, undefined, 2);
          }}
        >s
          Change!
        </Button>
      </div>
    );
  }
}
export default BarChart;
