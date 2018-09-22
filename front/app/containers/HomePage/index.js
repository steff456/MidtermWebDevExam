/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';

// Semantic
import { Container, Segment, Header } from 'semantic-ui-react';

// Redux
import { makeSelectGraphData } from './selectors';
import { graphDataReducer } from './reducer';

// Components
import Graph from './Graph';
import UploadE from './UploadE';
import GraphList from './GraphList';
import RateH from './RateH';
import InputData from './InputData';

/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.PureComponent {
  static propTypes = {
    graphData: PropTypes.object.isRequired,
  };

  render() {
    const {
      graphData: { spec },
    } = this.props;
    console.log(spec);
    return (
      <Container>
        <Segment textAlign="center" basic>
          <Header as="h1">Let's Visualize</Header>
        </Segment>
        <Segment.Group>
          <Segment textAlign="center">
            {!isEmpty(spec) && <Graph spec={spec} />}
          </Segment>
          <InputData />
        </Segment.Group>
        <Segment>
          <GraphList />
        </Segment>
        <Segment>
          <UploadE />
        </Segment>
        <Segment textAlign="center">
          <RateH />
        </Segment>
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  graphData: makeSelectGraphData(),
});

const withConnect = connect(mapStateToProps);

const withReducer = injectReducer({
  key: 'graphData',
  reducer: graphDataReducer,
});

export default compose(
  withReducer,
  withConnect,
)(HomePage);
