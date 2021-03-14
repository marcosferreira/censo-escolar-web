import React from 'react';

import { Form, Input, Label, Button } from './styles';

export function InputLabel(props) {
  return (
    <fieldset>
      <Input type={props.type} name={props.name} onKeyUp={props.onKeyUp} onChange={props.onChange} autoFocus={props.autoFocus} required={props.required} />
      <Label>{ props.label }</Label>
    </fieldset>
  );
}

export { Form, Input, Label, Button };
