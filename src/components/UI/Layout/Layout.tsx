import React, { FunctionComponent } from 'react';

import Logo from 'assets/logo.svg';

import * as ST from './Layout.styled';

// type LayoutProps = {
//
// };

export const Layout: FunctionComponent = ({ children }): JSX.Element => {
  return (
    <ST.LayoutWrapper>
      <ST.LayoutHeader data-testid="layout-header">
        <img src={Logo} alt="Origin" />
      </ST.LayoutHeader>
      <ST.LayoutMain>{children}</ST.LayoutMain>
    </ST.LayoutWrapper>
  );
};
