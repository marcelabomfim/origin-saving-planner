import React, { FunctionComponent, ReactElement } from 'react';

import * as ST from './Field.styled';

type FieldProps = {
  label: string;
  htmlFor: string;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
};

type FieldSubComponent = {
  Icon: typeof ST.FieldIcon;
};

export const Field: FunctionComponent<FieldProps> & FieldSubComponent = ({
  children,
  label,
  htmlFor,
  leftIcon,
  rightIcon,
}): JSX.Element => {
  return (
    <ST.FieldWrapper>
      <ST.FieldLabel htmlFor={htmlFor}>{label}</ST.FieldLabel>
      <ST.FieldGroup>
        {leftIcon && <ST.FieldIcon>{leftIcon}</ST.FieldIcon>}
        {children}
        {rightIcon && <ST.FieldIcon>{rightIcon}</ST.FieldIcon>}
      </ST.FieldGroup>
    </ST.FieldWrapper>
  );
};

Field.Icon = ST.FieldIcon;
