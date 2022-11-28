import React, { FunctionComponent } from 'react';

import * as ST from './Button.styled';

type ButtonProps = {
  title?: string;
};

export const Button: FunctionComponent<ButtonProps> = ({ children, title }): JSX.Element => {
  return <ST.Button title={title}>{children}</ST.Button>;
};
