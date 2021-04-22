import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchContacts } from './redux/contacts/contacts-operations'; // Импорт async операции запроса всех контактов

import Container from './components/Container';
import Logo from './components/Logo';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import Loader from './components/Loader';

const App = () => {
  const contacts = useSelector(state => state.contacts.items);
  const isLoading = useSelector(state => state.contacts.loading);
  const dispatch = useDispatch();

  // При монтировании компонента вызываем операцию запроса всех компонентов
  useEffect(() => {
    dispatch(fetchContacts());
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Logo />

      <ContactForm />

      {contacts.length >= 1 && <Filter />}

      <ContactList />

      {isLoading && <Loader />}
    </Container>
  );
};

export default App;
