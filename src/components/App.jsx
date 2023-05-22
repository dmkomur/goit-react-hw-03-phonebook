import React from 'react';
import { nanoid } from 'nanoid';

import { FormAdd } from './FormAdd/FormAdd';
import { ContactList } from './ContactList/ContactList';
import { Search } from './Search/Search';

const SAMPLE = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
export class App extends React.Component {
  state = {
    contacts: SAMPLE,
    filters: '',
  };

  onFormSubmit = data => {
    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };
  handleSearch = event => {
    this.setState({
      filters: event.target.value,
    });
  };
  render() {
    const filteredContacts = this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(this.state.filters.toLocaleLowerCase())
    );

    return (
      <div className="container">
        <h1>Phonebook</h1>
        <FormAdd
          handleForm={this.onFormSubmit}
          contacts={this.state.contacts}
        />
        <Search onSearch={this.handleSearch} />
        <ContactList fileList={filteredContacts} onDelete={this.handleDelete} />
      </div>
    );
  }
}
