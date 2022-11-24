import styled from 'styled-components';

export const PlanSavingGoalInfo = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.borders};
  border-radius: 0.5rem;
  margin: 0 0 2rem 0;

  h3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.25rem;
    line-height: 1.2;
    padding: 1.5rem 2rem;
    margin: 0;

    strong {
      font-family: 'Rubik', sans-serif;
      font-size: 2rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.brandSecondary};
    }
  }

  p {
    background: ${({ theme }) => theme.colors.backgroundPrimary};
    font-size: 0.75rem;
    line-height: 1rem;
    margin: 0;
    padding: 1.5rem 2rem;
  }
`;
