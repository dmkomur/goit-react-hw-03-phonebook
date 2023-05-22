import {
  StyledContact,
  StyledBtnDel,
  StyledContactList,
} from './ContactList.Styled';
import PropTypes from 'prop-types';

export const ContactList = ({ fileList, onDelete }) => {
  return (
    <StyledContactList>
      <h3>Contacts</h3>
      {fileList.map(el => (
        <StyledContact key={el.id}>
          <span>
            {el.name}: {el.number}
          </span>
          <StyledBtnDel id={el.id} onClick={() => onDelete(el.id)}>
            delete
          </StyledBtnDel>
        </StyledContact>
      ))}
    </StyledContactList>
  );
};

ContactList.propTypes = {
  fileList: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
