import React from 'react';
import { Li, Span } from './Contact.styled';
// import PropTypes from 'prop-types'

export const Contact = ({ contacts }) => {
  return contacts.map(({id, name, number}) => (
        <Li key={id}>
          <Span>{name}:</Span>
          <Span>{number}</Span>
        </Li>
      ))
};

Contact.propTypes = {};
