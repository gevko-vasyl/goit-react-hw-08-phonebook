import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getFilter } from "../../redux/selectors";
import ContactItem from "../ContactItem/ContactItem";

import "./ContactList.scss";

export default function ContactList({ contactsApi }) {
  const value = useSelector(getFilter);
  console.log(value);
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const optimizedFilter = value.toLowerCase();
    try {
      setContacts(
        contactsApi.filter(({ name }) =>
          name.toLowerCase().includes(optimizedFilter)
        )
      );
    } catch (error) {
      return error;
    }
  }, [contactsApi, value]);

  return (
    <>
      <ul className="ContactList">
        {contacts.map(({ name, number, id }) => (
          <ContactItem key={id} name={name} number={number} id={id} />
        ))}
      </ul>
    </>
  );
}
