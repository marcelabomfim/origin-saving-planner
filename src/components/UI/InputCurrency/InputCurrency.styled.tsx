import styled from 'styled-components';
import CurrencyInput from 'react-currency-input-field';

export const InputCurrency = styled(CurrencyInput)`
  border: 0;
  width: 100%;
  height: 100%;
  font-family: 'Rubik', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textTertiary};

  @media (min-width: 600px) {
    font-size: 1.5rem;
  }
`;
