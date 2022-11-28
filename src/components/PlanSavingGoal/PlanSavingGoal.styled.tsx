import styled from 'styled-components';

export type PlanSavingGoalInfoProps = {
  show: boolean;
};

export const PlanSavingGoalInfo = styled.div<PlanSavingGoalInfoProps>`
  border: 1px solid ${({ theme }) => theme.colors.borders};
  border-radius: 0.5rem;
  margin: ${({ show }) => (show ? '0 0 2rem 0' : '0')};
  max-height: ${({ show }) => (show ? '9999px' : '0')};
  opacity: ${({ show }) => (show ? '1' : '0')};
  transition: margin ease 0.3s, max-height ease 0.3s, opacity ease 0.3s;
  overflow: hidden;
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
