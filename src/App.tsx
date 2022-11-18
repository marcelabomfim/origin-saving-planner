import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, originTheme } from 'theme';
import { Layout, PlanSavingGoal } from 'components';

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={originTheme}>
      <GlobalStyle />
      <Layout>
        <h2>
          Let{`'`}s plan your <strong>saving goal.</strong>
        </h2>
        <PlanSavingGoal />
      </Layout>
    </ThemeProvider>
  );
}
