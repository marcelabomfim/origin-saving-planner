import { createGlobalStyle } from 'styled-components';

import { OriginTheme } from './originTheme';

export const GlobalStyle = createGlobalStyle<{ theme: OriginTheme }>`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Work Sans', sans-serif;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  h1 {
    font-family: 'Rubik', sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1;
    margin: 0;

    small {
      font-family: 'Work Sans', sans-serif;
      font-size: 1rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.textSecondary};
    }
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.brandPrimary};
    margin: 1.5rem 0;
  }
`;
