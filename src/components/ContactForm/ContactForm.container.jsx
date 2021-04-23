import { connect } from 'react-redux'; // Импорт функции коннекта к хранилищу

import { addContact } from '../../redux/contacts/contacts-operations'; // Импорт операции добавления контакта
import { getContacts } from '../../redux/contacts/contacts-selectors'; // Импорт селектора

import ContactForm from './ContactForm'; // Импорт компонента формы для обёртки в коннекте

// Из глобального стейта в пропы компонента ContactForm
const mapStateToProps = state => ({
  contacts: getContacts(state),
});

// Из глобального стейта в пропы компонента ContactForm - методы
const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) => dispatch(addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
