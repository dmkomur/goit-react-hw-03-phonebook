import styled from 'styled-components';

export const StyledContact = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 16px;
  padding: 4px 16px;
  transition: background-color 250ms ease-out;

  &:hover {
    background-color: #f4f5eb;
  }
`;
export const StyledBtnDel = styled.button`
  border: none;
  border-radius: 16px;
  background-color: rgb(97, 57, 57);
  padding: 4px 8px;
  color: white;
  transition: background-color 250ms ease-in;

  &:hover {
    background-color: #b43434;
  }
`;
export const StyledContactList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  gap: 8px;
`;
