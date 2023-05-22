import React from 'react';
import { nanoid } from 'nanoid';

import { FormAdd } from './FormAdd/FormAdd';
import { ContactList } from './ContactList/ContactList';
import { Search } from './Search/Search';

export class App extends React.Component {
  state = {
    contacts: [],
    filters: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(window.localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      window.localStorage.setItem(
        'contacts',
        JSON.stringify(this.state.contacts)
      );
    }
  }

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
