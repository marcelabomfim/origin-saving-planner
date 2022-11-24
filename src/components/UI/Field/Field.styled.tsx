import styled from 'styled-components';

export const FieldWrapper = styled.div`
  margin: 1.5rem 0;
  width: 100%;
`;

export const FieldLabel = styled.label`
  font-size: 0.875rem;
  line-height: 1.5;
`;

export const FieldGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.borders};
  border-radius: 0.25rem;
  height: 3.5rem;
  margin: 0.25rem 0 0 0;
`;
