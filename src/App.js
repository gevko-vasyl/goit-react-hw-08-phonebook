import { useFetchContactQuery } from "../src/redux/operations";

import Container from "./components/Container/Container";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const { data: contactApi } = useFetchContactQuery();
  return (
    <Container>
      <ContactForm contactsApi={contactApi} />
      <Filter />
      {contactApi && <ContactList contactsApi={contactApi} />}
    </Container>
  );
}

export default App;
