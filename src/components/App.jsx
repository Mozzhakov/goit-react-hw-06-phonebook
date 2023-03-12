import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import css from './Styles/App.module.css';

export const App = () => {
  return (
    <div>
      <div className={css.phonebook}>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      <div className={css.contacts}>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};
