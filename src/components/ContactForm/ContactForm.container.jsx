// Можно перевести форму целиком на хуки без использования контейнера (отложено)

import { connect } from 'react-redux'; // Импорт функции коннекта к хранилищу
import { addContact } from '../../redux/contacts/contacts-operations'; // Импорт операцию добавления контакта

import ContactForm from './ContactForm';

// Из глобального стейта в пропы компонента ContactForm
const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

// Из глобального стейта в пропы компонента ContactForm - методы
const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) => dispatch(addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
