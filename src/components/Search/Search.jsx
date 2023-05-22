import { StyledSearchWrap, StyledSearchInput } from './Search.styled';
import PropTypes from 'prop-types';

export const Search = ({ onSearch }) => {
  return (
    <StyledSearchWrap>
      <h3>Search contact by name</h3>
      <StyledSearchInput
        type="text"
        onChange={onSearch}
        placeholder="enter name here"
      />
    </StyledSearchWrap>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
