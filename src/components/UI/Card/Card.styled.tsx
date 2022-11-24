import styled from 'styled-components';

export const CardWrapper = styled.section`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 0.5rem;
  box-shadow: 0 1rem 2rem ${({ theme }) => theme.colors.textPrimary}14;
  padding: 1.5rem 1.5rem 2.5rem 1.5rem;
  width: 560px;
  max-width: 100%;

  @media (min-width: 600px) {
    padding: 2rem 2.5rem 2.5rem 2.5rem;
  }
`;

export const CardHeader = styled.header`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
