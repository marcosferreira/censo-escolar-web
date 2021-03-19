import React, { useState } from 'react';
import { useHistory } from 'react-router';

import { Form, InputLabel, ButtonPrimary, ButtonSecondary, SelectLabel } from '../../components/Form';
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

  const isStundet = [
    {
      id: '0',
      label: '',
      value: '',
    },
    {
      id: '1',
      label: 'Sim',
      value: 'sim',
    },
    {
      id: '2',
      label: 'Não',
      value: 'não',
    },
  ];

  return (
    <Form onSubmit={onSubmit}>
      <h1>Questionário</h1>
      <h2>Pessoa {props.currentStep}</h2>

      {/* {console.log(`exibindo formulário ${props.currentStep}`)} */}

      {/* <InputLabel type="text" name="district" label="Bairro/Localidade" autoFocus required /> */}
      <h5>Quantas pessoas da moradia não estudam? Exemplifique em qual faixa etária os que não estudam se encaixam:</h5>
      <InputLabel type="number" name="fx_etaria_2a3" label="2 a 3 anos de idade" required />

      <ButtonGroup>
        <ButtonPrimary type="submit">Salvar e Continuar</ButtonPrimary>
        <ButtonSecondary type="submit" onClick={() => setRedirectForm(true)}>
          Salvar e Concluir
        </ButtonSecondary>
        <ButtonSecondary type="submit" onClick={() => history.push('/home')}>
          Cancelar
        </ButtonSecondary>
      </ButtonGroup>
    </Form>
  );
}

export default FormPerson;
