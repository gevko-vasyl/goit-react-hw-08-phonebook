export const getContacts = (state) => state.contacts.contacts;
export const getFilter = (state) => state.contacts.filter;
export const getLoading = (state) => state.contacts.loading;

export const getUser = (state) => state.user;

export const normalizedContact = (state) => {
  const filter = getFilter(state);
  const contacts = getContacts(state);
  const loweredFilter = filter.toLowerCase();
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(loweredFilter)
  );
};
