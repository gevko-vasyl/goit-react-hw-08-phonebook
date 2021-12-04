import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { normalizedContact } from "../../redux/selectors";
import { fetchContacts } from "../../redux/operations";
import ContactItem from "../ContactItem/ContactItem";

import "./ContactList.scss";

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => normalizedContact(state));

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (contacts.length === 0) {
    return <h2 className="ContactListTitle">Your contact list is empty</h2>;
  }
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
