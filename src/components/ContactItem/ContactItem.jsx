import React from "react";
import PropTypes from "prop-types";
import { useDeleteContactsMutation } from "../../redux/operations";

export default function ContactItem({ name, number, id }) {
  const [deleteContacts, { isLoading: isDeleting }] =
    useDeleteContactsMutation();
  return (
    <li className="ContactItem">
      <p className="ContactItem__text">{name}</p>
      <p className="ContactItem__text">{number}</p>
      <button
        className="ContactListItem__button"
        onClick={() => deleteContacts(id)}
      >
        {isDeleting ? "Deleting..." : "Delete"}
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
