import React from 'react';
import { useLocation } from 'react-router-dom';

import { Container } from './styles';
import logo from '../../assets/logo.png';

export default function Header() {
  const location = useLocation();

  return (
    <React.Fragment>
      { location.pathname !== '/' && location.pathname !== '/signup'
        ? (
          <Container>
            <img src={logo} alt="logo" />
          </Container>
        ) : null
      }

    </React.Fragment>
  )
}
