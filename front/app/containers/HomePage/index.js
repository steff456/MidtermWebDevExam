/**
 *
 * HomePage
 *
 */

import React from 'react';
import styled from 'styled-components';
import { Container, Segment, Header } from 'semantic-ui-react';

import BarChart from './BarChart';

const MainContainer = styled(Container)`
  margin-top: 6em;
  margin-bottom: 6em;
`;

/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.PureComponent {
  render() {
    return (
      <MainContainer>
        <Segment textAlign="center" basic>
          <Header as="h1">My visualization!</Header>
        </Segment>
        <Segment basic>
          <BarChart />
        </Segment>
      </MainContainer>
    );
  }
}

export default HomePage;
