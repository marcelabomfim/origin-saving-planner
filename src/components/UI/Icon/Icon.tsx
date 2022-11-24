import React, { FunctionComponent } from 'react';

import * as ST from './Icon.styled';

type IconProps = {
  onClick?: () => void;
  disabled?: boolean;
};

export const Icon: FunctionComponent<IconProps> = ({ children, ...props }): JSX.Element => {
  return <ST.Icon {...props}>{children}</ST.Icon>;
};
