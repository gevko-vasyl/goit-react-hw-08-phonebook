import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../../redux/operations";
import { getContacts } from "../../redux/selectors";
import "./ContactForm.scss";

export default function ContactForm() {
  const contacts = useSelector((state) => getContacts(state));
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleNameChange = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const handleNumberChange = (e) => {
    const number = e.target.value;
    setNumber(number);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contacts) {
      const repeatName = contacts.reduce(
        (acc, contact) => [...acc, contact.name],
        []
      );
      const repeatNumber = contacts.reduce(
        (acc, contact) => [...acc, contact.number],
        []
      );
      if (repeatName.includes(name) || repeatNumber.includes(number)) {
        alert(`${name} ${number} is already created`);
        return;
      }

      if (name === "" || number === "") {
        alert(`Enter data`);
        return;
      }
    }

    const newContact = { name, number };
    dispatch(addContact(newContact));
    setName("");
    setNumber("");
  };
  return (
    <form className="Form" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleNameChange}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
          onChange={handleNumberChange}
        />
      </label>
      <button type="submit" className="Form__button">
        Add contact
      </button>
    </form>
  );
}
