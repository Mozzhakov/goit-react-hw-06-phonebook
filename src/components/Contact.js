import { useDispatch } from 'react-redux';
import css from './Styles/ContactList.module.css';
import { deleteContact } from 'redux/sliceContacts';
import PropTypes from 'prop-types';

export const Contact = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <li key={id} className={css.contactList__item}>
      {name}: {number}
      <button
        type="button"
        onClick={handleDelete}
        className={css.contactList__btn}
      >
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
