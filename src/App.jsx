import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Alert from '@material-ui/lab/Alert';

import { fetchContacts } from './redux/contacts/contacts-operations'; // Импорт async операции запроса всех контактов

import Container from './components/Container';
import Logo from './components/Logo';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import Loader from './components/Loader';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const contacts = useSelector(state => state.contacts.items);
  const isLoading = useSelector(state => state.contacts.loading);
  const error = useSelector(state => state.contacts.error);
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
      {error && <Alert severity="error">{error.message}</Alert>}

      <ToastContainer autoClose={2500} />
    </Container>
  );
};

export default App;
