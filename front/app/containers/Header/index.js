/**
 *
 * Header
 *
 */

import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import { Image } from 'components/Image';
import { Link } from 'react-router-dom';

import Logo from 'images/icon-512x512.png';

import MainNavBar from './MainNavBar';

function Header() {
  return (
    <header>
      <Segment textAlign="center" basic>
        <Container className="header-container d-flex justify-content-between align-items-center">
          <Link to="/" className="brand-logo">
            <Image src={Logo} alt="Main logo" style={{ maxWidth: '140px' }} />
          </Link>
          <MainNavBar />
        </Container>
      </Segment>
    </header>
  );
}

export default Header;
