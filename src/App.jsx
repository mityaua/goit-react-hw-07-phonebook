import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import Alert from '@material-ui/lab/Alert';

import { fetchContacts } from './redux/contacts/contacts-operations'; // Импорт async операции запроса всех контактов
import { getLoading, getError } from './redux/contacts/contacts-selectors'; // Импорт селекторов

import Container from './components/Container';
import Logo from './components/Logo';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import Loader from './components/Loader';

import 'react-toastify/dist/ReactToastify.css';

// Вариант без пропсов и без класса + хук для селекторов
const App = () => {
  const isLoadingContacts = useSelector(state => getLoading(state));
  const isError = useSelector(state => getError(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Logo />

      <ContactForm />

      <Filter />

      <ContactList />

      {isLoadingContacts && <Loader />}

      {isError && <Alert severity="error">{isError.message}</Alert>}

      <ToastContainer autoClose={2500} />
    </Container>
  );
};

export default App;

// Вариант с пропсами через ToProps и без класса
// const App = ({ isLoadingContacts, isError, fetchContactsOnMOunt }) => {
//   useEffect(() => {
//     fetchContactsOnMOunt();
//   }, [fetchContactsOnMOunt]);

//   return (
//     <Container>
//       <Logo />

//       <ContactForm />

//       <Filter />

//       <ContactList />

//       {isLoadingContacts && <Loader />}

//       {isError && <Alert severity="error">{isError.message}</Alert>}

//       <ToastContainer autoClose={2500} />
//     </Container>
//   );
// };

// const mapStateToProps = state => ({
//   isLoadingContacts: getLoading(state),
//   isError: getError(state),
// });

// const mapDispatchToProps = dispatch => ({
//   fetchContactsOnMOunt: () => dispatch(fetchContacts()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
