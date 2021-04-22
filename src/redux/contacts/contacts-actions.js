import { createAction } from '@reduxjs/toolkit'; // Импорт функции создания экшена из тулкита

// Создание экшенов для получаения списка контактов
export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest',
);
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess',
);
export const fetchContactsError = createAction('contacts/fetchContactsError');

// Создание экшенов для добавления контакта
export const addContactRequest = createAction('contacts/addContactsRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

// Создание экшенов для удаления контакта
export const deleteContactRequest = createAction(
  'contacts/deleteContactsRequest',
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess',
);
export const deleteContactError = createAction('contacts/deleteContactError');

// Создание экшена для фильтра
export const changeFilter = createAction('contacts/change-filter');
