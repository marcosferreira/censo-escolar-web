import React from 'react';

import { Form, Input, Label, ButtonPrimary, ButtonSecondary, Select } from './styles';

export function InputLabel(props) {
  return (
    <fieldset>
      <Input
        type={props.type}
        name={props.name}
        min={props.min}
        max={props.max}
        onKeyUp={props.onKeyUp}
        onChange={props.onChange}
        autoFocus={props.autoFocus}
        autoComplete={props.autoComplete}
        required={props.required}
      />
      <Label>{props.label}</Label>
    </fieldset>
  );
}

export function SelectLabel(props) {
  return (
    <fieldset>
      <Select name={props.name} required={props.required} >
        {props.options.map((option) => {
          return (
            <option key={option.id} value={option.value} >
              {option.label}
            </option>
          );
        })}
      </Select>
      <Label>{props.label}</Label>
    </fieldset>
  );
}

export { Form, Input, Label, ButtonPrimary, ButtonSecondary };
