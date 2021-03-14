import React from 'react';
import { useHistory } from 'react-router-dom';

import { Form, InputLabel, Button } from '../../components/Form';
import { ButtonGroup } from './styles';

function FormResindece(props) {
  const history = useHistory();

  if (props.currentStep !== 0) {
    return null;
  }

  const onSubmit = (event) => {
    event.preventDefault();
    event.target.reset();

    console.log('enviado!!!');

    props.next();
  };

  return (
    <Form onSubmit={onSubmit}>
      <h1>Questionário</h1>
      <h2>Domicílio</h2>
      {/* {console.log(`exibindo formulário ${props.currentStep}`)} */}
      <InputLabel type="text" name="district" label="Bairro/Localidade" autoFocus required />
      <InputLabel type="text" name="address" label="Rua/Logradouro" required />
      <InputLabel type="text" name="home_num" label="Nº da Residência" required />
      <InputLabel type="text" name="electrical_power_unit" label="Cód. Unidade Elétrica" required />
      <InputLabel type="text" name="number_of_residents" label="Quantidade de moradores" required />
      <ButtonGroup>
        <Button type="submit">Continuar</Button>
        <Button type="button" onClick={() => history.push('/home')} color="#FFFFFF" backgroundColor="#01933E">
          Cancelar
        </Button>
      </ButtonGroup>{' '}
    </Form>
  );
}

export default FormResindece;
