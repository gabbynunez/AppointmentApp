import React, { useState, useEffect } from "react";
import { ContactForm } from '/Users/gaby/Desktop/ProgrammingStuff/react_challenge_start 3/src/components/contactForm/ContactForm.js';
import { TileList } from '../../components/tileList/TileList.js';

export const ContactsPage = ({contacts, addContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicate) {
      addContact(name,phone,email);
      setName('');
      setPhone('');
      setEmail('');
    }
  };
  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    if (contacts.find(contact => contact.name === name)) {
      setDuplicate(true);
    }else {
      setDuplicate(false);
    }
 
  });
  
  return (
    <div>
      <section>
        <h2>Add Contact
        {duplicate ? " - Name Already Exists" : ""} </h2> 
        <ContactForm name={name} 
        setName={setName} 
        phone={phone} 
        setPhone={setPhone} 
        email={email} 
        setEmail={setEmail} 
        handleSubmit={handleSubmit}  />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
