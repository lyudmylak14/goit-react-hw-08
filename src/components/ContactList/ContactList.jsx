import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectNameFilter } from '../../redux/filters/selectors';
import { deleteContactThunk } from '../../redux/contacts/operations';
import { selectFilteredContacts } from '../../redux/contacts/selectors';



const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter) || '';
  const filterContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filterContact.map(contact => (
        <li className={css.item} key={contact.id}>
          <Contact
            name={contact.name}
            id={contact.id}
            number={contact.number}
            onDelete={() => dispatch(deleteContactThunk(contact.id))}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;