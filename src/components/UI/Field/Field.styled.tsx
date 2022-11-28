import styled from 'styled-components';

export const FieldWrapper = styled.div`
  width: 100%;

  @media (min-width: 560px) {
    margin: 1.5rem 0;
  }
`;

export const FieldLabel = styled.label`
  font-size: 0.75rem;
  line-height: 1.5;

  @media (min-width: 600px) {
    font-size: 0.875rem;
  }
`;

export const FieldGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.borders};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  height: 3.5rem;
  margin: 0.25rem 0 0 0;
`;

export const FieldIcon = styled.button`
  background: transparent;
  border: 0;
  height: 3.5rem;
  line-height: 1;
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
  border-top: 1px solid ${({ theme }) => theme.colors.borders};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borders};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  &:hover:not(:disabled) {
    background: ${({ theme, onClick }) => (onClick ? theme.colors.backgroundPrimary : '')};
  }

  &:first-child {
    border-top-left-radius: ${({ theme }) => theme.borderRadius.xs};
    border-bottom-left-radius: ${({ theme }) => theme.borderRadius.xs};
  }

  &:last-child {
    border-top-right-radius: ${({ theme }) => theme.borderRadius.xs};
    border-bottom-right-radius: ${({ theme }) => theme.borderRadius.xs};
  }
`;
