import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { changeFilter } from "./actions";

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  filter,
});

// import { combineReducers } from "redux";
// import { createReducer } from "@reduxjs/toolkit";

// const initState = [
//   {
//     id: "id-1",
//     name: "Rosie Simpson",
//     number: "459-12-56",
//   },
//   {
//     id: "id-2",
//     name: "Hermione Kline",
//     number: "443-89-12",
//   },
//   {
//     id: "id-3",
//     name: "Eden Clements",
//     number: "645-17-79",
//   },
//   {
//     id: "id-4",
//     name: "Annie Copeland",
//     number: "227-91-26",
//   },
// ];

// const contactList = createReducer(initState, {
//   "contacts/add": (state, { payload }) => [...state, payload],
//   "contacts/delete": (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// });

// const filter = createReducer("", {
//   "filter/value": (state, { payload }) => payload,
// });

// export const phonebookReducer = combineReducers({
//   contact: contactList,
//   filter,
// });
