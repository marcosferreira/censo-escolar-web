import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { HiOutlineClipboardList, HiOutlineDocumentReport } from 'react-icons/hi';
import { FiUsers } from 'react-icons/fi';

import { Container, PanelButton } from './styles';

export default function Home() {
  return (
    <Container>
      <PanelButton>
        <p><AiOutlineSearch size={40} /></p>
        <p>Procurar Cadastro</p>
      </PanelButton>

      <PanelButton>
        <p><HiOutlineClipboardList size={40} /></p>
        <p>Iniciar Questionário</p>
      </PanelButton>

      <PanelButton>
      <p><HiOutlineDocumentReport size={40} /></p>
        <p>Visualizar Relatório</p>
      </PanelButton>

      <PanelButton>
      <p><FiUsers size={40} /></p>
        <p>Gerenciar Usuários</p>
      </PanelButton>
    </Container>
  );
}
