import ContactList from "../../components/ContactList/ContactList";
import Filter from "../../components/Filter/Filter";
import ContactForm from "../../components/ContactForm/ContactForm";
import Container from "../../components/Container/Container";
import { useSelector } from "react-redux";
import { getIsRefreshing } from "../../redux/auth/authSelectors";

const Phonebook = () => {
  const isReloading = useSelector(getIsRefreshing);
  return (
    <Container>
      {!isReloading && (
        <>
          <div>
            <ContactForm />
            <Filter />
            <ContactList />
          </div>
        </>
      )}
    </Container>
  );
};

export default Phonebook;
