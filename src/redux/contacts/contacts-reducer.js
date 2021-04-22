import { combineReducers } from 'redux'; // Импорт функции комбайна редюсеров
import { createReducer } from '@reduxjs/toolkit'; // Импорт функции создания редюсера

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
  changeFilter,
} from './contacts-actions'; // Импорт экшенов из контактов в редюсеры

// Создание редюсера для массива items в контактах (фетч всех контактов, добавление и удаление контакта)
const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) =>
    payload.sort((a, b) => a.name.localeCompare(b.name)),
  [addContactSuccess]: (state, { payload }) => [payload, ...state],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

// Создание редюсера для фильтра в контактах
const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

// Создание редюсера индикации загрузки
const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,

  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

// Создание редюсера обработки ошибок
const error = createReducer(null, {
  [fetchContactsError]: (_, { payload }) => payload,
  [addContactError]: (_, { payload }) => payload,
  [deleteContactError]: (_, { payload }) => payload,

  [fetchContactsRequest]: () => null,
  [fetchContactsSuccess]: () => null,

  [addContactRequest]: () => null,
  [addContactSuccess]: () => null,

  [deleteContactRequest]: () => null,
  [deleteContactSuccess]: () => null,
});

// Экспорт всех редюсеров через комбайн
export default combineReducers({ items, filter, loading, error });
