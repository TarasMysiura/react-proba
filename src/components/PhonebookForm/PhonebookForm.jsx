import React, { Component } from 'react';
import {
  Button,
  Form,
  Input,
  Label,
  Span,
  TitleH2,
} from './PhonebookForm.styled';

export class PhonebookForm extends Component {
  render() {
    return (
      <>
        <TitleH2>{this.props.title}</TitleH2>
        <Form onSubmit={this.handleSubmit}>
          <Label>
            <Span>Name</Span>
            <Input
              //   onChange={this.handleInputChange}
              //   value={this.state.name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              //   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              //   value={name}
              //   onChange={onSubmit}
              required
            />
          </Label>
          {/* <Label>
          Number
          <Input
            onChange={this.handleInputChange}
            value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            //   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label> */}
          <Button type="submit">Add contact</Button>
        </Form>
      </>
    );
  }
}

PhonebookForm.propTypes = {};

