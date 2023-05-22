import styled from 'styled-components';

export const StyledInput = styled.input`
  border: 2px solid #475f4b;
  margin-left: 8px;
  border-radius: 16px;
  font-size: 16px;
`;

export const StyledBtn = styled.button`
  padding: 4px 8px;
  border: none;
  border-radius: 24px;
  font-size: 16px;
  font-family: inherit;
  font-weight: 500;
  background-color: #78917c;
  color: white;
  transition: background-color 250ms ease-in;
  &:hover {
    background-color: #547459;
  }
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px 24px;
  background-color: #c8d1c9;
  border-radius: 24px;
`;
