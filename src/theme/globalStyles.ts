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
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1;
    margin: 0;

    small {
      font-family: 'Work Sans', sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.textSecondary};
    }

    @media (min-width: 600px) {
      font-size: 1.5rem;

      small {
        font-size: 1rem;  
      }
    }
  }

  h2 {
    font-size: 1.125rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.brandPrimary};
    margin: 1.5rem 0;

    @media (min-width: 600px) {
      font-size: 1.25rem;
    }
  }

  h3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.2;
    padding: 1.5rem;
    margin: 0;

    strong {
      font-family: 'Rubik', sans-serif;
      font-size: 1.5rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.brandSecondary};
    }

    @media (min-width: 600px) {
      padding: 1.5rem 2rem;
      font-size: 1.25rem;

      strong {
        font-size: 2rem;
      }
    }
  }

  p {
    background: ${({ theme }) => theme.colors.backgroundPrimary};
    font-size: 0.75rem;
    line-height: 1rem;
    margin: 0;
    padding: 1.5rem 1rem;
    text-align: center;

    @media (min-width: 600px) {
      padding: 1.5rem 2rem;
      text-align: left;
    }
  }
`;
