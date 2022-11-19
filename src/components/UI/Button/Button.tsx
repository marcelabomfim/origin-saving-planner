import React, { FunctionComponent } from 'react';

type ButtonProps = {
  title?: string;
};

export const Button: FunctionComponent<ButtonProps> = ({ children, title }): JSX.Element => {
  return (
    <button data-testid="button" title={title}>
      {children}
    </button>
  );
};
