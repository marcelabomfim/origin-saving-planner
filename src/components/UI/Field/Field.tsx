import React, { FunctionComponent } from 'react';

import * as ST from './Field.styled';

type FieldProps = {
  label: string;
  htmlFor: string;
};

export const Field: FunctionComponent<FieldProps> = ({ children, label, htmlFor }): JSX.Element => {
  return (
    <ST.FieldWrapper>
      <ST.FieldLabel htmlFor={htmlFor}>{label}</ST.FieldLabel>
      <ST.FieldGroup>{children}</ST.FieldGroup>
    </ST.FieldWrapper>
  );
};
