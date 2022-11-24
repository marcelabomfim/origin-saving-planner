import styled from 'styled-components';

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.brandPrimary};
  border: 0;
  border-radius: 2rem;
  color: ${({ theme }) => theme.colors.backgroundSecondary};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  padding: 1rem 2rem;
  width: 20rem;
  max-width: 100%;
  transition: background ease 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.brandSecondary};
  }
`;
