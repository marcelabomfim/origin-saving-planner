import styled from 'styled-components';

export const Icon = styled.button`
  background: transparent;
  border: 0;
  height: 1.5rem;
  line-height: 1;
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
`;
