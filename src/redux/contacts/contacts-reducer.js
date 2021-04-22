import { combineReducers } from 'redux'; // Импорт функции комбайна редюсеров
import { createReducer } from '@reduxjs/toolkit'; // Импорт функции создания редюсера

// Импорт экшенов из контактов в редюсеры
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
} from './contacts-actions';

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
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,

  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
});

// Экспорт всех редюсеров через комбайн
export default combineReducers({ items, filter, loading });
