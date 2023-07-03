import { Component } from "react";
import { PhonebookForm } from "./PhonebookForm/PhonebookForm";
import { Contacts } from "./Contacts/Contacts";

export class App extends Component {
state = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
  name: '',
  number: '',
};

  render() {
    console.log(this.state.contacts);
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          // justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          paddingTop: 50,
        }}
      >
        <PhonebookForm
          title="Phonebook"
          // onAddContact={this.onAddContact}
          // options={options}
          // onLeaveFeedback={this.onLeaveFeedback}
        ></PhonebookForm>
        <Contacts title="Contacts" contacts={this.state.contacts} />
      </div>
    );
  }
};