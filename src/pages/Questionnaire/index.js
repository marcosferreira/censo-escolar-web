import React from 'react';

import { Form, InputLabel, Button } from '../../components/Form';
import { Container } from './styles';

function Questionnaire() {
  return (
    <Container>
      <Form>
        <h1>Questionário</h1>
        <h2>Domicílio</h2>

        <InputLabel type="text" name="district" label="Bairro/Localidade" required />
        <InputLabel type="text" name="address" label="Rua/Logradouro" required />
        <InputLabel type="text" name="home_num" label="Nº da Residência" required />
        <InputLabel type="text" name="electrical_power_unit" label="Cód. Unidade Elétrica" required />
        <InputLabel type="text" name="number_of_residents" label="Quantidade de moradores" required />

        <Button>Continuar</Button>
      </Form>
    </Container>
  );
}

export default Questionnaire;
