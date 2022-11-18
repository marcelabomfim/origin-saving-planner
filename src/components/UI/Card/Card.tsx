import React, { FunctionComponent } from 'react';

import * as ST from './Card.styled';

type CardType = FunctionComponent & {
  Header: typeof ST.CardHeader;
};

// type CardProps = {
//
// };

export const Card: CardType = ({ children }): JSX.Element => {
  return <ST.CardWrapper>{children}</ST.CardWrapper>;
};

Card.Header = ST.CardHeader;
