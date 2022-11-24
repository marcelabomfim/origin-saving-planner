import styled from 'styled-components';

export const InputDateWrapper = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const InputDateMonth = styled.span`
  font-size: 1rem;
  font-weight: 600;
`;

export const InputDateYear = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const InputDate = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: transparent;
  color: transparent;
  border: 0;
`;
