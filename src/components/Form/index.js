import React from 'react';

import { Form, Input, Label, Button } from './styles';

export function InputLabel(props) {
  return (
    <fieldset>
      <Input type={props.type} name={props.name} required={props.required} />
      <Label>{ props.label }</Label>
    </fieldset>
  );
}

export { Form, Input, Label, Button };
