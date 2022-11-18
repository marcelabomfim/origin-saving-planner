import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, originTheme } from 'theme';

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={originTheme}>
      <GlobalStyle />
      <div data-testid="greetings-container">Welcome to the Origin THA</div>
    </ThemeProvider>
  );
}
