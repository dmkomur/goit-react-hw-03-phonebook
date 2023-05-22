import React from 'react';
import { StyledInput, StyledBtn, StyledForm } from './FormAdd.styled';
import PropTypes from 'prop-types';

export class FormAdd extends React.Component {
  state = {
    name: '',
    number: '',
  };

  onFormChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  onFormSubmit = event => {
    event.preventDefault();
    if (
      this.props.contacts.find(
        el => el.name.toLowerCase() === this.state.name.toLowerCase()
      )
    ) {
      return alert(`${this.state.name} is already in contacts.`);
    }
    this.props.handleForm(this.state);
    this.setState({ name: '', number: '' });
  };
  render = () => {
    return (
      <StyledForm onSubmit={this.onFormSubmit}>
        <label>
          {' '}
          Name:
          <StyledInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.onFormChange}
            value={this.state.name}
          />
        </label>
        <label>
          Phone:
          <StyledInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.onFormChange}
            value={this.state.number}
          />
        </label>

        <StyledBtn type="submit">Add Contact</StyledBtn>
      </StyledForm>
    );
  };
}

FormAdd.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleForm: PropTypes.func.isRequired,
};
