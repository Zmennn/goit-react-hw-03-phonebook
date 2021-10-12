import React, { Component } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import ContactsList from "./components/ContactsList.jsx";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter.jsx";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: [],
  };

  handleSubmit = ({ name, number }) => {
    if (!this.state.contacts.find((el) => el.name === name)) {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, { name, number, id: uuidv4() }],
      }));
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  handleChangeFindInput = (ev) => {
    const regExp = new RegExp(`^${ev.target.value.toLowerCase()}`);

    this.setState({
      filter: regExp,
    });
  };

  handleFilter = () => {
    return this.state.contacts.filter((el) => {
      const arr = el.name.toLowerCase().split(" ");

      for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase().match(this.state.filter) !== null) {
          return true;
        }
      }
      return false;
    });
  };

  handleDelete = (ev) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((elem) => elem.id !== ev.target.id),
    }));
  };

  render() {
    const { handleSubmit, handleChangeFindInput, handleDelete, handleFilter } =
      this;

    return (
      <>
        <div>
          <h1>Phonebook</h1>

          <ContactForm handleSubmit={handleSubmit} />

          <h2>Contacts</h2>
          <Filter handleChangeFindInput={handleChangeFindInput} />

          <ContactsList contacts={handleFilter()} handleDelete={handleDelete} />
        </div>
      </>
    );
  }
}

export default App;
