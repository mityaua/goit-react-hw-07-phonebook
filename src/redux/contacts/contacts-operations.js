import axios from 'axios';
import { toast } from 'react-toastify';

import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contacts-actions'; // Импорт экшенов из контактов в операции

axios.defaults.baseURL = 'http://localhost:2121';

// Асинхронная операция получения списка контактов (делает запрос, диспатчит экшн получения)
export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
    toast.error(error.message);
  }
};

// Асинхронная операция по добавлению контакта (принимает данные с формы, делает запрос, диспатчит экшн добавления)
export const addContact = (name, number) => async dispatch => {
  const contact = { name, number };

  dispatch(addContactRequest());

  try {
    const { data } = await axios.post('/contacts', contact);

    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
    toast.error(error.message);
  }
};

// Асинхронная операция удаления контакта (принимает id, делает запрос, диспатчит экшн удаления)
export const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);

    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
    toast.error(error.message);
  }
};
