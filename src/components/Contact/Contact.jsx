import React from 'react';
import { Button, Li, NumberSpan, Span } from './Contact.styled';
// import PropTypes from 'prop-types'

export const Contact = ({ contacts, onRemoveContact}) => {
  return contacts.map(({ id, name, number }) => (
    <Li key={id}>
      <Span>{name}:</Span>
      <NumberSpan>{number}</NumberSpan>
      <Button type='button' onClick={() => onRemoveContact(id)}>Delete</Button>
    </Li>
  ));
};

Contact.propTypes = {};
