import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineClipboardList } from 'react-icons/hi';

import { Form } from '../../components/Form';
import { Container } from './styles';

export default function School() {
  return (
    <Container>
      <Link to="/school/create">
        <p>
          <HiOutlineClipboardList size={40} />
        </p>
        <p>Cadastrar Escola</p>
      </Link>

      <Link to="/school">
        <p>
          <HiOutlineClipboardList size={40} />
        </p>
        <p>Listar todas Escolas</p>
      </Link>

    </Container>
  );
}

export function SchoolCreate() {
  return (
    <Container>
      <Form>

      </Form>
    </Container>
  )
}

export function SchoolList() {
  return (
    <Container>
      <ul>
        <li>
          <p>resumo</p>
          <button>vizualizar</button>
          <button>atualizar</button>
        </li>
      </ul>
    </Container>
  )
}

export function SchoolShow() {
  return (
    <Container>
      exibir escola selecionada
    </Container>
  )
}
