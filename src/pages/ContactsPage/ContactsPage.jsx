import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContactsThunk } from '../../redux/contacts/operations';


const ContactsPage = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <SearchBox />
      {loading && <h2>Loading...</h2>}
      {error && <h2>Something went wrong!</h2>}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
