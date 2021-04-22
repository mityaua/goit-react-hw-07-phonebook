import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchContacts } from './redux/contacts/contacts-operations';

import Container from './components/Container';
import Logo from './components/Logo';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import Loader from './components/Loader';

const App = () => {
  const isLoading = useSelector(state => state.contacts.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Logo />

      <ContactForm />

      <Filter />

      <ContactList />

      {isLoading && <Loader />}
    </Container>
  );
};

export default App;
