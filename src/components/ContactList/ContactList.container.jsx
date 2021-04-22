import { connect } from 'react-redux'; // Импортирует коннект для глобального хранилища
import { deleteContact } from '../../redux/contacts/contacts-operations'; // Импорт async операции удаления контакта

import ContactList from './ContactList'; // Импорт компонента списка контактов для обёртки в коннекте

// // Фильтрует и возвращает результат фильтра
const getfilteredContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

// Из стейта в пропы компонента ContactList + в контакты пишет результат функции фильтра
const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getfilteredContacts(items, filter),
});

// Из стейта в пропы компонента ContactList - метод удаления контакта
const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
