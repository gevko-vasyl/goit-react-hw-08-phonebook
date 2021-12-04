import axios from "axios";

export async function fetchContactsNew() {
  const { data } = await axios.get("/contacts");
  return data;
}

export async function addContactNew({ name, number }) {
  const contact = { name, number };
  const data = axios.post("/contacts", contact);
  return data;
}

export async function deleteContactsNew(id) {
  console.log(id);
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
