import React from 'react';
import { HiOutlineClipboardList } from 'react-icons/hi';

import { Container } from './styles';
import { Link } from 'react-router-dom';

function SystemPanel() {
  return (
    <Container>
      <Link to="/system-panel">
        <p>
          <HiOutlineClipboardList size={40} />
        </p>
        <p>Gerenciar Escolas</p>
      </Link>

      <Link to="/system-panel">
        <p>
          <HiOutlineClipboardList size={40} />
        </p>
        <p>Gerenciar Entrevistadores</p>
      </Link>
    </Container>
  );
}

export default SystemPanel;
