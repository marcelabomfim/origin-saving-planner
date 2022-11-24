import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  background: ${({ theme }) => theme.colors.backgroundPrimary};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
`;

export const LayoutHeader = styled.header`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  display: flex;
  padding: 1rem;

  img {
    height: 1.5rem;
  }

  @media (min-width: 600px) {
    padding: 1.5rem 3.5rem;

    img {
      height: 2rem;
    }
  }
`;

export const LayoutMain = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  padding: 2rem 0;
`;
