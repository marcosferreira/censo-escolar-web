import React from 'react';

import { AiOutlineSearch } from 'react-icons/ai';
import { HiOutlineClipboardList, HiOutlineDocumentReport } from 'react-icons/hi';
import { IoSchoolOutline } from 'react-icons/io5';

import { Container } from './styles';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <Container>
      <Link to="/survey">
        <p>
          <HiOutlineClipboardList size={40} />
        </p>
        <p>Iniciar Questionário</p>
      </Link>

      <Link to="/search">
        <p>
          <AiOutlineSearch size={40} />
        </p>
        <p>Realizar Pesquisa</p>
      </Link>

      <Link to="/home">
        <p>
          <HiOutlineDocumentReport size={40} />
        </p>
        <p>Visualizar Relatório</p>
      </Link>

      <Link to="/school">
        <p>
          <IoSchoolOutline size={40} />
        </p>
        <p>Gerenciar Escolas</p>
      </Link>
    </Container>
  );
}

export default Home;
