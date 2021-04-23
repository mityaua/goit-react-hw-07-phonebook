import { connect } from 'react-redux'; // Импортирует коннект для глобального хранилища

import { deleteContact } from '../../redux/contacts/contacts-operations'; // Импорт async операции удаления контакта
import { getfilteredContacts } from '../../redux/contacts/contacts-selectors'; // Импорт селекторов

import ContactList from './ContactList'; // Импорт компонента списка контактов для обёртки в коннекте

// Из стейта в пропы компонента ContactList - после фильтрации в селекторах
const mapStateToProps = state => ({
  contacts: getfilteredContacts(state),
});

// Из стейта в пропы компонента ContactList - метод удаления контакта
const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
