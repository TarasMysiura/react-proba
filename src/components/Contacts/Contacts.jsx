import { Contact } from 'components/Contact/Contact';
import React from 'react';
import { TitleH2, Ul } from './Contacts.styled';

export const Contacts = ({ title, contacts, onRemoveContact }) => {
  //   console.log(title);
  //   console.log(contacts);

  return (
    <>
      <TitleH2>{title}</TitleH2>
      <Ul>
        <Contact contacts={contacts} onRemoveContact={onRemoveContact} />
      </Ul>
    </>
  );
};

Contacts.propTypes = {};
