import React, { Component } from 'react';
import PropTypes from 'prop-types';
import vegaEmbed from 'vega-embed';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';

class Graph extends React.Component {
  static propTypes = {
    spec: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.graphContainer = null;
  }

  componentDidMount = () => {
    const { spec } = this.props;
    if (!isEmpty(spec)) {
      vegaEmbed(this.graphContainer, spec);
    }
  };

  componentDidUpdate = prevProps => {
    const { spec } = this.props;
    if (!isEqual(spec, prevProps.spec)) {
      vegaEmbed(this.graphContainer, spec);
    }
  };

  render() {
    return (
      <div>
        <div
          ref={element => {
            this.graphContainer = element;
          }}
        />
      </div>
    );
  }
}
export default Graph;
