import styled from 'styled-components';

export const PlanSavingGoalInfo = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.borders};
  border-radius: 0.5rem;
  margin: 0 0 2rem 0;
`;

export const PlanSavingGoalForm = styled.form`
  display: flex;
  gap: 1rem;
  margin: 0 0 1.5rem 0;

  @media (max-width: 559px) {
    flex-wrap: wrap;
  }

  @media (min-width: 560px) {
    & > div:nth-child(1) {
      width: 56%;
    }

    & > div:nth-child(2) {
      width: 34%;
    }
  }
`;
