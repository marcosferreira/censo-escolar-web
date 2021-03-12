import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Sidebar(props) {

  return (
    <Container show={props.show}>
      <ul>
        <li><Link to="/home"><p>Início</p></Link></li>
        <li><Link to="/"><p>Sair</p></Link></li>
      </ul>
    </Container>
  );
}
