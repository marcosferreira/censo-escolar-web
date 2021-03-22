import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { HiOutlineClipboardList } from 'react-icons/hi';

import { ButtonPrimary, Form, InputLabel } from '../../components/Form';
import { Container } from './styles';
import { useForm } from '../../hooks';

export default function School() {
  return (
    <Container>
      <Link to="/school/create">
        <p>
          <HiOutlineClipboardList size={40} />
        </p>
        <p>Cadastrar Escola</p>
      </Link>

      <Link to="/school/list">
        <p>
          <HiOutlineClipboardList size={40} />
        </p>
        <p>Listar todas Escolas</p>
      </Link>
    </Container>
  );
}

export function SchoolCreate() {
  const [{ values, loading }, handleChange, handleSubmit] = useForm();

  const onSubmit = () => {
    console.log(values);
  };

  return (
    <Container>
      <h1>Cadastrando Escola</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputLabel type="text" name="schoolname" onChange={handleChange} label="NOME DA ESCOLA" required />
        <InputLabel type="text" name="inep" onChange={handleChange} label="INEP DA ESCOLA" required />
        <InputLabel type="text" name="address" onChange={handleChange} label="ENDEREÇO DA ESCOLA" required />
        <InputLabel type="hidden" name="user" onChange={handleChange} />
        <ButtonPrimary type="submit">{loading ? 'Cadastrando...' : 'Cadastrar'}</ButtonPrimary>
      </Form>
    </Container>
  );
}

export function SchoolList() {
  const history = useHistory();

  return (
    <Container>
      <ul>
        <li key={123}>
          <p>resumo</p>
          <button onClick={() => history.push(`/school/${123}`)}>vizualizar</button>
          <button>atualizar</button>
        </li>
        <li key={456}>
          <p>resumo</p>
          <button onClick={() => history.push(`/school/${456}`)}>vizualizar</button>
          <button>atualizar</button>
        </li>
      </ul>
    </Container>
  );
}

export function SchoolShow() {
  const { id } = useParams();
  return <Container>Id da Escola selecionada: {id}</Container>;
}
