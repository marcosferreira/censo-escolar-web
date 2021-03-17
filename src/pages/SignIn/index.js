import React, { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useForm } from '../../hooks';
import { Form, InputLabel, ButtonPrimary } from '../../components/Form';
import { maskCPF } from '../../Utils';

import { Container } from './styles';

import logo from '../../assets/logo.png';
import { api } from '../../services/api';

function SignIn() {
  const history = useHistory();
  const [{ values, loading }, handleChange, handleSubmit] = useForm();
  const [message, setMessage] = useState('');

  const onSubmit = () => {
    const options = {
      method: 'POST',
      headers: {
        Accept: 'applications/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(values),
    };

    fetch(`${api}/login`, options)
      .then((response) => {
        if (response.ok) {
          setTimeout(() => history.push('/home'), 1000)
        }
        return response.json();
      })
      .then((data) => setMessage(data.message))
  };

  const handleMaskCPF = useCallback((event) => {
    maskCPF(event);
  }, []);

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off" maxWidth="400px">
        <img src={logo} alt="logo" />
        {message}
        <InputLabel type="text" name="cpf" label="CPF" onKeyUp={handleMaskCPF} onChange={handleChange} required />
        <InputLabel type="password" name="password" onChange={handleChange} label="SENHA" required />
        <ButtonPrimary backgroundColor="#80C125" color="#FFF">
          {loading ? 'Entrando...' : 'ENTRAR'}
        </ButtonPrimary>
        <Link to="/signup">Inscrever-se</Link>
      </Form>
    </Container>
  );
}

export default SignIn;
