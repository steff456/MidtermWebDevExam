/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Container, Segment, Header, Grid } from 'semantic-ui-react';

import Button from 'antd/lib/button';
import Input from 'antd/lib/input';

import Graph from './Graph';
import UploadE from './UploadE';

const { TextArea } = Input;

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

  changeData = e => {
    try {
      this.setState({ spec: JSON.parse(e.target.value) });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { spec } = this.state;
    return (
      <Container>
        <Segment textAlign="center" basic>
          <Header as="h1">Let's Visualize</Header>
        </Segment>
        <Segment>
          <Grid stackable centered columns="equal">
            <Grid.Row>
              <Grid.Column width={6}>
                <TextArea
                  rows={12}
                  size="large"
                  onPressEnter={this.changeData}
                />
                <Button type="primary" onClick={this.changeData}>
                  Change data
                </Button>
              </Grid.Column>
              <Grid.Column width={10}>
                <Graph spec={spec} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment>
          <UploadE />
        </Segment>
      </Container>
    );
  }
}

export default HomePage;
