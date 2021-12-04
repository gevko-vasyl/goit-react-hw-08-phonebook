import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./actions";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { addUser } from "./auth/authOperations";

const initState = {
  contactsList: [],
  filter: "",
  isLoading: false,
};

const contactList = createReducer(initState.contactsList, {
  [fetchContacts.fulfilled]: (state, action) => {
    return action.payload;
  },
  [addContact.fulfilled]: (state, action) => {
    return [...state, action.payload.data];
  },

  [deleteContact.fulfilled]: (state, action) => {
    console.log(action.payload);
    const newState = state.filter((contact) => contact.id !== action.payload);
    return newState;
  },
});

const filter = createReducer("", {
  [actions.filter]: (_, action) => action.payload,
});

const loading = createReducer(false, {
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [addContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [fetchContacts.pending]: () => true,
  [addUser.fulfilled]: () => false,
  [addUser.rejected]: () => false,
  [addUser.pending]: () => true,
});

export default combineReducers({
  contacts: contactList,
  filter: filter,
  loading: loading,
});
