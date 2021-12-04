import { createAction } from "@reduxjs/toolkit";

export const addContactRequest = createAction("contacts/addRequest");
export const addContactSuccess = createAction("contacts/addSuccess");
export const addContactFail = createAction("contacts/addFail");

export const deleteContactRequest = createAction("contacts/deleteRequest");
export const deleteContactSuccess = createAction("contacts/deleteSuccess");
export const deleteContactFail = createAction("contacts/deleteFail");

export const fetchContactsRequest = createAction("contacts/fetchRequest");
export const fetchContactsSuccess = createAction("contacts/fetchSuccess");
export const fetchContactsFail = createAction("contacts/fetchFail");

export const filter = createAction("contacts/filter");
export const deleteContact = createAction("contacts/delete");
