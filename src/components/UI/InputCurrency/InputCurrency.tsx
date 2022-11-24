import React, { FunctionComponent } from 'react';
import { CurrencyInputProps } from 'react-currency-input-field';

import * as ST from './InputCurrency.styled';

type InputCurrencyProps = CurrencyInputProps;

export const InputCurrency: FunctionComponent<InputCurrencyProps> = ({ onValueChange, ...props }): JSX.Element => {
  return (
    <ST.InputCurrency
      min={0}
      intlConfig={{ locale: 'en-US' }}
      allowNegativeValue={false}
      decimalsLimit={2}
      onValueChange={onValueChange}
      {...props}
    />
  );
};
