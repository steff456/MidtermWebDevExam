import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';

// Antd
import List from 'antd/lib/list';

// Semantic
import { Dimmer, Loader, Header, Segment } from 'semantic-ui-react';

// Redux
import { makeSelectGraphsList } from './selectors';
import { graphsListReducer } from './reducer';
import { fetchGraphsList, setGraphData } from './actions';

class GraphList extends Component {
  static propTypes = {
    graphsList: PropTypes.object.isRequired,
    fetchGraphsList: PropTypes.func.isRequired,
    setGraphData: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchGraphsList();
  }

  selectGraph = ({ data, encoding, mark }) => {
    this.props.setGraphData({ data, encoding, mark });
  };

  render() {
    const {
      graphsList: { data, isLoading, state },
    } = this.props;
    console.log(data);
    return (
      <Dimmer.Dimmable dimmed={isLoading}>
        <Dimmer active={isLoading} inverted>
          <Loader />
        </Dimmer>
        {state === 'SUCCESS' && !isLoading ? (
          <List
            bordered
            dataSource={data}
            renderItem={item => (
              <List.Item onClick={() => this.selectGraph(item)}>
                {item._id}
              </List.Item>
            )}
          />
        ) : (
          []
        )}
        {state === 'FAIL' && !isLoading ? (
          <Segment
            compact
            textAlign="center"
            padded="very"
            style={{ margin: 'auto' }}
          >
            <Header as="h3">
              Error loading the data. Try to reload the page.
            </Header>
          </Segment>
        ) : (
          []
        )}
      </Dimmer.Dimmable>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  graphsList: makeSelectGraphsList(),
});

const mapDispatchToProps = {
  fetchGraphsList,
  setGraphData,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({
  key: 'graphsList',
  reducer: graphsListReducer,
});

export default compose(
  withReducer,
  withConnect,
)(GraphList);
