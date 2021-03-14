import React, { useState } from 'react';
import { useHistory } from 'react-router';

import { Form, InputLabel, Button } from '../../components/Form';

function FormPerson(props) {
  const [redirectForm, setRedirectForm] = useState(false);
  const history = useHistory();

  if (props.currentStep === 0) {
    return null;
  }

  const onSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    props.next();

    console.log('enviado!!!');
    if (redirectForm) {
      history.push('/home')
      setRedirectForm(false)
    }
  }

  return (
    <Form onSubmit={onSubmit}>
      <h1>Questionário</h1>
      <h2>Pessoa {props.currentStep}</h2>

      {/* {console.log(`exibindo formulário ${props.currentStep}`)} */}

      <InputLabel type="text" name="district" label="Bairro/Localidade" required />
      <InputLabel type="text" name="address" label="Rua/Logradouro" required />
      <InputLabel type="text" name="home_num" label="Nº da Residência" required />
      <InputLabel type="text" name="electrical_power_unit" label="Cód. Unidade Elétrica" required />
      <InputLabel type="text" name="number_of_residents" label="Quantidade de moradores" required />

      <Button type="submit">Nova Pessoa</Button>
      <Button type="submit" onClick={() => setRedirectForm(true)} color="#FFFFFF" backgroundColor="#01933E">Concluir</Button>
    </Form>
  );
}

export default FormPerson;
