import React, { useState } from 'react';
import { useHistory } from 'react-router';

import { Form, InputLabel, Button } from '../../components/Form';
import { ButtonGroup } from './styles';

function FormPerson(props) {
  const [redirectForm, setRedirectForm] = useState(false);
  const history = useHistory();

  if (props.currentStep === 0) {
    return null;
  }

  const onSubmit = (event) => {
    event.preventDefault();

    console.log('enviado!!!');

    if (redirectForm) {
      history.push('/home');
      setRedirectForm(false);
    }

    event.target.reset();
    props.next();
  };

  return (
    <Form onSubmit={onSubmit}>
      <h1>Questionário</h1>
      <h2>Pessoa {props.currentStep}</h2>

      {/* {console.log(`exibindo formulário ${props.currentStep}`)} */}

      <InputLabel type="text" name="district" label="Bairro/Localidade" autoFocus required />
      <InputLabel type="text" name="address" label="Rua/Logradouro" required />
      <InputLabel type="text" name="home_num" label="Nº da Residência" required />
      <InputLabel type="text" name="electrical_power_unit" label="Cód. Unidade Elétrica" required />
      <InputLabel type="text" name="number_of_residents" label="Quantidade de moradores" required />

      <ButtonGroup>
        <Button type="submit">Salvar e Continuar</Button>
        <Button type="submit" onClick={() => setRedirectForm(true)}>
          Salvar e Concluir
        </Button>
        <Button type="submit" onClick={() => history.push('/home')}>
          Cancelar
        </Button>
      </ButtonGroup>
    </Form>
  );
}

export default FormPerson;
